<script lang="ts">
  import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
  import Icon from '@iconify/svelte';
  import Saos from 'saos';
  import Fa from 'svelte-fa';

  import Button from '$lib/components/buttons/Button.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import bg from '$lib/components/graphics/hero-bg.svg';

  import { contacts, submitContactRequest } from '$lib/api/contact';
  import { inputClass } from '$lib/components/form';
  import { enableMessageForm } from '$lib/config';

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
  <div
    class="bg-repeat bg-center flex relative duration-500 bg-[length:auto_200%]"
    style="background-image: url({bg});"
  >
    <Wrappper>
      <div class="w-full">
        <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
          <h2
            class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
            id="contact"
          >
            Contact
          </h2>
        </Saos>

        <div class="flex flex-wrap justify-center gap-4 lg:gap-5 xl:gap-6">
          {#each contacts as contact}
            <a
              href={contact.link}
              target="_blank"
              class="w-full md:w-[48.5%] lg:w-[31.5%]"
              aria-label={contact.name}
            >
              <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
                <Button noDarkVariant={false} fullWidth={true} variant={contact.colorVariant}>
                  <div class="w-8 h-8" slot="icon">
                    <Icon icon={contact.icon} class="w-full h-full" />
                  </div>
                  <span>{contact.contact}</span>
                </Button>
              </Saos>
            </a>
          {/each}
        </div>

        <div class="my-16">
          {#if enableMessageForm}
            <div class="lg:flex lg:justify-between">
              <div class="hidden lg:block my-auto pr-8 xl:pr-12">
                <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
                  <h3
                    class="dark:text-white duration-500 font-cascadia-mono text-3xl md:text-4xl lg:text-5xl"
                  >
                    Message me!
                  </h3>
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
                  <form method="dialog">
                    <div class="flex flex-col mb-4">
                      <label for="name" class="dark:text-white md:text-lg lg:text-xl font-medium">
                        Name
                      </label>
                      <input
                        bind:value={data.name}
                        type="text"
                        id="name"
                        name="name"
                        class={inputClass}
                        required
                      />

                      <label for="email" class="dark:text-white md:text-lg lg:text-xl font-medium">
                        Email
                      </label>
                      <input
                        bind:value={data.email}
                        type="email"
                        id="email"
                        name="email"
                        class={inputClass}
                        required
                      />

                      <label
                        for="message"
                        class="dark:text-white md:text-lg lg:text-xl font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        bind:value={data.message}
                        id="message"
                        name="message"
                        class={inputClass}
                        required
                      ></textarea>
                    </div>
                    <div class="ml-1">
                      <button
                        type="submit"
                        class="block w-full"
                        on:click={buttonDisabled ? () => 0 : handleSubmit}
                      >
                        <Button
                          noDarkVariant={false}
                          fullWidth={true}
                          variant={buttonDisabled ? 'disabled' : 'primary'}
                          disabled={buttonDisabled}
                        >
                          <Fa icon={faPaperPlane} slot="icon" />
                          <span
                            class="{submisstionStatus === 'Failed'
                              ? 'text-red-500'
                              : 'text-inherit'} md:text-lg lg:text-xl font-medium"
                          >
                            {submisstionStatus === 'Initial'
                              ? 'Send'
                              : submisstionStatus === 'Failed'
                                ? 'Failed, try again'
                                : submisstionStatus}
                          </span>
                        </Button>
                      </button>
                    </div>
                  </form>
                </div>
              </Saos>
            </div>
          {/if}
        </div>
      </div>
    </Wrappper>
  </div>
</section>
