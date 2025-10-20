<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
	import { Button } from '.';
	import { Settings } from '@lucide/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: 'select',
        description: 'The visual style variant of the button',
        table: {
          defaultValue: { summary: 'default' },
        },
      },
      size: {
        control: 'select',
        description: 'The size of the button',
        table: {
          defaultValue: { summary: 'default' },
        },
      },
      disabled: {
        control: 'boolean',
        description: 'Whether the button is disabled',
        table: {
          defaultValue: { summary: 'false' },
        },
      },
      href: {
        control: 'text',
        description: 'If provided, renders as an anchor tag instead of a button',
      },
      type: {
        control: 'select',

        description: 'The button type attribute (only applies when not using href)',
        table: {
          defaultValue: { summary: 'button' },
        },
      },
    },
    args: {
      variant: 'default',
      size: 'default',
      disabled: false,
      type: 'button',
      onclick: fn(),
    }
  });
</script>

<Story name="Default" args={{ variant: 'default' }}
argTypes={{
  href: {
    control: false
  },
  ref: {
    control: false
  },
}}
>
  {#snippet children()}
    Button
  {/snippet}
</Story>

<Story name="Destructive" args={{ variant: 'destructive' }}>
  {#snippet children()}
    Delete
  {/snippet}
</Story>

<Story name="Outline" args={{ variant: 'outline' }}>
  {#snippet children()}
    Outline
  {/snippet}
</Story>

<Story name="Secondary" args={{ variant: 'secondary' }}>
  {#snippet children()}
    Secondary
  {/snippet}
</Story>

<Story name="Ghost" args={{ variant: 'ghost' }}>
  {#snippet children()}
    Ghost
  {/snippet}
</Story>

<Story name="Link" args={{ variant: 'link' }}>
  {#snippet children()}
    Link
  {/snippet}
</Story>


<Story name="Icon" args={{ size: 'icon', variant: 'outline' }}>
  {#snippet children()}
  <Settings />
  {/snippet}
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  {#snippet children()}
    Disabled
  {/snippet}
</Story>

<Story name="As Link" args={{ href: 'https://example.com', variant: 'link' }}>
  {#snippet children()}
    Link Button
  {/snippet}
</Story>

<Story name="With Icon" args={{ variant: 'default' }}>
  {#snippet children()}
   <Settings />
    Button with Icon
  {/snippet}
</Story>
