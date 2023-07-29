<script lang="ts">
	import { submitContactRequest } from '$lib/api/contact/handler';

	import type { ColorVariant } from '$lib/components/buttons/button';

	import { whatsappLink, emailLink } from '$lib/variables';

	import Wrappper from '$lib/components/Wrappper.svelte';
	import Button from '$lib/components/buttons/Button.svelte';

	import Whatsapp from '$lib/components/graphics/social/Whatsapp.svelte';
	import Email from '$lib/components/graphics/social/Email.svelte';
	import { inputClass } from '$lib/components/form/TextInput';
	import Saos from 'saos';

	const whatsappButton: ColorVariant = { key: 'whatsapp' };
	const emailButton: ColorVariant = { key: 'email' };
	const primaryButton: ColorVariant = { key: 'primary' };
	const disabledButton: ColorVariant = { key: 'disabled' };

	let submisstionStatus: 'Initial' | 'Loading' | 'Success' | 'Failed' = 'Initial';
	let buttonDisabled = false;

	let data = { name: '', email: '', message: '' };

	const handleSubmit = async () => {
		if (!data.name || !data.email.includes('@') || !data.message) return;

		submisstionStatus = 'Loading';
		buttonDisabled = true;

		try {
			await submitContactRequest(data);

			submisstionStatus = 'Success';
			buttonDisabled = true;
		} catch (error) {
			submisstionStatus = 'Failed';
			buttonDisabled = false;
		}
	};
</script>

<section>
	<Wrappper>
		<div class="w-full">
			<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
				<h1
					class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
					id="contact"
				>
					Contact
				</h1>
			</Saos>

			<div
				class="flex flex-wrap sm:flex-nowrap justify-between gap-8 md:gap-16 lg:gap-24 xl:gap-36"
			>
				<a href={whatsappLink} class="w-full">
					<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
						<Button
							noDarkVariant={false}
							fullWidth={true}
							variant={whatsappButton}
							centerText={true}
						>
							<div class="w-8 h-8" slot="icon">
								<Whatsapp />
							</div>
							<span>Whatsapp me</span>
						</Button>
					</Saos>
				</a>
				<a href={emailLink} class="w-full">
					<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
						<Button noDarkVariant={false} fullWidth={true} variant={emailButton}>
							<div class="w-8 h-8" slot="icon">
								<Email />
							</div>
							<span>Email me</span>
						</Button>
					</Saos>
				</a>
			</div>
			<div class="lg:flex lg:justify-between my-16">
				<div class="hidden lg:block my-auto pr-8 xl:pr-12">
					<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
						<h1 class="dark:text-white duration-500">Message me!</h1>
					</Saos>
				</div>
				<Saos
					animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'}
					once
					css_observer={'width: 100%;'}
				>
					<div
						class="w-full bg-custom-1 dark:bg-slate-700 border-4 border-slate-900 dark:border-white h-max px-8 py-4 md:px-12 md:py-6"
					>
						<!-- CONTACT FORM -->
						<form method="dialog">
							<div class="flex flex-col mb-4">
								<label for="name"><h4 class="dark:text-white">Name</h4></label>
								<input
									bind:value={data.name}
									type="text"
									id="name"
									name="name"
									class={inputClass}
									required
								/>

								<label for="email"><h4 class="dark:text-white">Email</h4></label>
								<input
									bind:value={data.email}
									type="email"
									id="email"
									name="email"
									class={inputClass}
									required
								/>

								<label for="message"><h4 class="dark:text-white">Message</h4></label>
								<textarea
									bind:value={data.message}
									id="message"
									name="message"
									class={inputClass}
									required
								/>
							</div>
							<div class="ml-1">
								<button
									type="submit"
									class="block w-full"
									on:click={buttonDisabled ? () => {} : handleSubmit}
								>
									<Button
										noDarkVariant={false}
										fullWidth={true}
										variant={buttonDisabled ? disabledButton : primaryButton}
										disabled={buttonDisabled}
									>
										<h4 class="{submisstionStatus === 'Failed' ? 'text-red-500' : 'text-inherit'} ">
											{submisstionStatus === 'Initial'
												? 'Send'
												: submisstionStatus === 'Failed'
												? 'Failed, try again'
												: submisstionStatus}
										</h4>
									</Button>
								</button>
							</div>
						</form>
						<!-- CONTACT FROM END -->
					</div>
				</Saos>
			</div>
		</div>
	</Wrappper>
</section>
