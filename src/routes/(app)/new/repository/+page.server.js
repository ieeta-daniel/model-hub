import { BASE_API_URL, REPOSITORY_CREATE_PATH } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';

const REPOSITORY_CREATE_URL = `${BASE_API_URL}/${REPOSITORY_CREATE_PATH}`;

/** @type {(path: string) => string} */
function extractUrl(path) {
    const parts = path.split("models/")[1];
    return parts ? parts : "";
}

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
    if (!locals.loggedIn) {
        throw redirect(301, '/');
    }
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url, fetch }) => {
        const formData = await request.formData();

        const formDataObject = formData.toObject();

        formDataObject.private = formDataObject.visibility === 'private';
        delete formDataObject.visibility;

        const res = await fetch(REPOSITORY_CREATE_URL, {
            body: JSON.stringify(formDataObject),
            credentials: 'include',
            method: "POST",
            headers: {
                Authorization: `Bearer ${cookies.get("access_token")}`,
                'Content-Type': 'application/json'
            }
        });

        console.log(res);

        if (!res.ok) {
            const response = await res.json();
            const errors = [];
            errors.push({ error: response.error, id: 0 });
            return fail(400, { errors: errors });
        }
        
        const response = await res.json();

        const path = response.path ?? '';

        const next = extractUrl(path);
            
        throw redirect(301, url.searchParams.get('rext') || next);
    }
};
