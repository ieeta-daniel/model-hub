<script>
	import { Button } from "flowbite-svelte";
	import Logo from "./+Logo.svelte";
    export let next = "";
    export let active = false;
    
    /**
	 * @type {boolean}
	 */
    let hasFileSelected;

    /**
	 * @param {{ currentTarget: { files: any; }; }} event
	 */
    function handleFileChange(event) {
        const selectedFiles = event.currentTarget.files;

        if (selectedFiles.length > 0) {
            hasFileSelected = true;
        } else {
            hasFileSelected = false;
        }
  }
</script>

<div class:hidden={!active} class="w-full rounded-xl shadow dark:border md:mt-0 md:max-w-xl xl:p-0 bg-white dark:bg-gray-900 dark:border-gray-700">
    <div class="px-5 py-6">
        <Logo svgClass="mx-auto -mt-14 mb-2 w-20" />
        <h1 class="pt-3 pb-2 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Complete your profile
        </h1>
        <p class="font-light text-gray-500 dark:text-gray-400 mb-8 text-center">
            One last step to join the community
        </p>
        <div>
            <div class="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="order-first">
                    <label for="username" class="block mb-2 dark:text-gray-400 font-medium">Username</label>
                    <input pattern="\b(?!\d+$)([a-zA-Z0-9]|-(?!-))+\b" minlength="3" maxlength="42" autocorrect="off" autocapitalize="none" autocomplete="username" type="text" name="username" id="username" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-250 dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Username123" required>
                </div>
                <div class="order-2">
                    <label for="name" class="block mb-2 dark:text-gray-400 font-medium">Full name</label>
                    <input autocomplete="name" type="text" name="name" id="name" placeholder="John Doe" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-250 dark:focus:ring-gray-500 dark:focus:border-gray-500" required>
                </div>
                <div class="order-3">
                    <label for="avatar" class="block mb-2 dark:text-gray-400 font-medium">Avatar <span class="pl-1 text-gray-400 dark:text-gray-300 font-normal">(optional)</span></label>
                    <input type="file" name="avatar" id="avatar" on:change={handleFileChange} accept="image/png, image/jpeg, image/gif" class="{hasFileSelected ? 'text-gray-900 dark:text-gray-250' : 'text-gray-300 dark:text-gray-500'}  block text-base w-full border border-gray-200 rounded-lg cursor-pointer focus:outline-none dark:bg-gray-700 dark:border-gray-600">
                </div>
                <div class="order-5 md:order-4">
                    <label for="github_username" class="block mb-2 dark:text-gray-400 font-medium">
                        <svg class="inline-block text-gray-500 mr-1 -mt-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1.03em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 250">
                            <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z" fill="currentColor"></path>
                        </svg>
                        Github username <span class="pl-1 text-gray-400 dark:text-gray-300 font-normal">(optional)</span>
                    </label>
                    <input pattern="[a-zA-Z\d-]+" type="text" name="github_username" id="github_username" placeholder="John Doe" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-250 dark:focus:ring-gray-500 dark:focus:border-gray-500">
                </div>
                <div class="order-4 md:order-5">
                    <label for="homepage_url" class="block mb-2 dark:text-gray-400 font-medium">Homepage <span class="pl-1 text-gray-400 dark:text-gray-300 font-normal">(optional)</span></label>
                    <input type="url" name="homepage_url" id="homepage_url" placeholder="John Doe" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-250 dark:focus:ring-gray-500 dark:focus:border-gray-500">
                </div>
                <div class="order-6">
                    <label for="twitter_username" class="block mb-2 dark:text-gray-400 font-medium">
                        <svg class="inline-block text-gray-500 mr-1 -mt-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1.23em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 209">
                            <path d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45" fill="#55acee"></path>
                        </svg>
                        Twitter username <span class="pl-1 text-gray-400 dark:text-gray-300 font-normal">(optional)</span>
                    </label>
                    <input pattern="[a-zA-Z\d_]+" type="text" name="twitter_username" id="twitter_username" placeholder="John Doe" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-250 dark:focus:ring-gray-500 dark:focus:border-gray-500">
                </div>
                <div class="flex items-start md:col-span-2 mt-4 order-last">
                    <div class="flex items-center h-5">
                        <input id="terms" name="terms" type="checkbox" class="w-5 h-5 cursor-pointer ring-offset-gray-50 dark:bg-gray-500 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600 rounded text-primary-600 focus:ring-primary-700" required>                    
                    </div>
                    <div class="ml-3 leading-none">
                        <label for="terms" class="text-gray-500 dark:text-gray-400 cursor-pointer">
                            I have read and agree with the
                            <a href="/terms-of-service" target="_blank" class="underline dark:text-gray-400 dark:hover:text-white text-primary-700">Terms of Service</a>
                            and the
                            <a href="/code-of-conduct" target="_blank" class="underline dark:text-gray-400 dark:hover:text-white text-primary-700">Code of Conduct</a>
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <Button on:click outline color="light" class="focus:ring-2 select-none w-full text-base inline-flex bg-white text-gray-700 p-2.5 rounded-md border font-medium shadow-sm align-middle hover:bg-gray-50">
                    {#if next}
                        Next Step: {next}
                    {:else}
                        Register
                    {/if}
                </Button>
            </div>
        </div>
    </div>
</div>