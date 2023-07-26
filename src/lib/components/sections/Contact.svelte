<script lang="ts">
	import Wrappper from '$lib/components/Wrappper.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import type { ColorVariant } from '$lib/components/buttons/button';
	import TextInput from '$lib/components/form/TextInput.svelte';
	import { whatsappLink, emailLink } from '$lib/variables';

	import Whatsapp from '$lib/components/graphics/social/Whatsapp.svelte';
	import Email from '$lib/components/graphics/social/Email.svelte';

	const whatsappButton: ColorVariant = { key: 'whatsapp' };
	const emailButton: ColorVariant = { key: 'email' };
</script>

<section>
	<Wrappper>
		<div class="w-full">
			<h1
				class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
				id="contact"
			>
				Contact
			</h1>

			<div
				class="flex flex-wrap sm:flex-nowrap justify-between gap-8 md:gap-16 lg:gap-24 xl:gap-36"
			>
				<a href={whatsappLink} class="w-full">
					<Button noDarkVariant={false} fullWidth={true} variant={whatsappButton} centerText={true}>
						<div class="w-8 h-8" slot="icon">
							<Whatsapp />
						</div>
						<span>Whatsapp me</span>
					</Button>
				</a>
				<a href={emailLink} class="w-full">
					<Button noDarkVariant={false} fullWidth={true} variant={emailButton}>
						<div class="w-8 h-8" slot="icon">
							<Email />
						</div>
						<span>Email me</span>
					</Button>
				</a>
			</div>
			<div class="lg:flex lg:justify-between my-16">
				<div class="hidden lg:block my-auto pr-8 xl:pr-12">
					<h1 class="dark:text-white duration-500">Message me!</h1>
				</div>
				<div
					class="w-full bg-custom-1 dark:bg-slate-700 border-4 border-text dark:border-white h-max px-8 py-4 md:px-12 md:py-6"
				>
					<form action="#">
						<div class="flex flex-col mb-4">
							<label for="name"><h4 class="dark:text-white">Name</h4></label>
							<TextInput idName="name" required={true} />

							<label for="email"><h4 class="dark:text-white">Email</h4></label>
							<TextInput type="email" idName="email" required={true} />

							<label for="message"><h4 class="dark:text-white">Message</h4></label>
							<TextInput idName="message" isTextArea={true} required={true} />
						</div>
						<div class="w-[98.5%] ml-1">
							<button type="submit" class="block w-full">
								<Button noDarkVariant={false} fullWidth={true}>Send</Button>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</Wrappper>
</section>
