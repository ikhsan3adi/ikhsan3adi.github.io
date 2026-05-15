<script lang="ts">
  import type { ButtonColorVariants } from '$lib/components/colors';

  export let disabled = false;
  export let variant: keyof ButtonColorVariants = disabled ? 'disabled' : 'primary';
  export let noDarkVariant = true;
  export let fullWidth = false;
  export let centerText = true;
  export let small = false;

  const backBackgroundColors: ButtonColorVariants = {
    primary: 'dark:bg-primary',
    secondary: 'dark:bg-secondary',
    white: 'dark:bg-white',
    disabled: 'dark:bg-neutral-400',
    whatsapp: 'dark:bg-green-400',
    email: 'dark:bg-red-400',
    github: 'dark:bg-slate-200',
    hackerrank: 'dark:bg-teal-400',
    instagram: 'dark:bg-fuchsia-400',
    facebook: 'dark:bg-sky-400',
    linkedIn: 'dark:bg-blue-400',
    medium: 'dark:bg-neutral-400',
    telegram: 'dark:bg-cyan-400',
    x: 'dark:bg-indigo-100',
    codeforces: 'dark:bg-amber-400',
    gitlab: 'dark:bg-orange-400',
    'custom-3': 'dark:bg-custom-3'
  };

  const borderColors: ButtonColorVariants = {
    primary: 'dark:border-primary',
    secondary: 'dark:border-secondary',
    white: 'dark:border-white',
    disabled: 'dark:border-neutral-400',
    whatsapp: 'dark:border-green-400',
    email: 'dark:border-red-400',
    github: 'dark:border-slate-200',
    hackerrank: 'dark:border-teal-400',
    instagram: 'dark:border-fuchsia-400',
    facebook: 'dark:border-sky-400',
    linkedIn: 'dark:border-blue-400',
    medium: 'dark:border-neutral-400',
    telegram: 'dark:border-cyan-400',
    x: 'dark:border-indigo-100',
    codeforces: 'dark:border-amber-400',
    gitlab: 'dark:border-orange-400',
    'custom-3': 'dark:border-custom-3'
  };

  const backgroundColors: ButtonColorVariants = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    white: 'bg-white',
    disabled: 'bg-neutral-400',
    whatsapp: 'bg-green-400',
    email: 'bg-red-400',
    github: 'bg-slate-200',
    hackerrank: 'bg-teal-400',
    instagram: 'bg-fuchsia-400',
    facebook: 'bg-sky-400',
    linkedIn: 'bg-blue-400',
    medium: 'bg-neutral-400',
    telegram: 'bg-cyan-400',
    x: 'bg-indigo-100',
    codeforces: 'bg-amber-400',
    gitlab: 'bg-orange-400',
    'custom-3': 'bg-custom-3'
  };

  const textColors: ButtonColorVariants = {
    primary: 'dark:text-primary',
    secondary: 'dark:text-secondary',
    white: 'dark:text-white',
    disabled: 'dark:text-neutral-400',
    whatsapp: 'dark:text-green-400',
    email: 'dark:text-red-400',
    github: 'dark:text-slate-200',
    hackerrank: 'dark:text-teal-400',
    instagram: 'dark:text-fuchsia-400',
    facebook: 'dark:text-sky-400',
    linkedIn: 'dark:text-blue-400',
    medium: 'dark:text-neutral-400',
    telegram: 'dark:text-cyan-400',
    x: 'dark:text-indigo-100',
    codeforces: 'dark:text-amber-400',
    gitlab: 'dark:text-orange-400',
    'custom-3': 'dark:text-custom-3'
  };
</script>

<!-- back -->
<button
  class="{noDarkVariant ? '' : backBackgroundColors[variant]} {fullWidth ? 'w-full' : ''} 
	bg-slate-900 duration-200"
>
  <!-- bg & border-->
  <div
    class="{backgroundColors[variant]}
		{noDarkVariant ? '' : 'dark:bg-slate-900'}
    {noDarkVariant ? '' : borderColors[variant]}
		{centerText ? ' justify-center' : ''} {disabled ? '' : 'active:translate-x-0 active:translate-y-0'}
		flex items-center border-slate-900 border-2 duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-2 hover:-translate-y-2 w-full"
  >
    <!-- icon -->
    {#if $$slots.icon}
      <div
        class="{noDarkVariant ? '' : textColors[variant]} {small
          ? 'mr-2'
          : 'mr-4'}  flex items-center justify-center"
      >
        <slot name="icon" />
      </div>
    {/if}

    <!-- text -->
    <span
      class="{small ? 'text-sm' : 'md:text-lg lg:text-xl font-medium'} {noDarkVariant
        ? ''
        : textColors[variant]} duration-200"
    >
      <slot />
    </span>
  </div>
</button>
