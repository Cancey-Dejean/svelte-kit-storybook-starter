<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
	import { Button } from '@/lib/components/atoms/button';
	import { Settings } from '@lucide/svelte';

  const { Story } = defineMeta({
    title: 'Atoms/Button',
    component: Button,
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
        table: {
          disable: true
        }
      },
      type: {
        control: 'select',
        description: 'The button type attribute (only applies when not using href)',
        table: {
          defaultValue: { summary: 'button' },
        },
      },
      ref: {
        control: false,
        description: 'The ref of the button',
      },
      newTab: {
        control: 'boolean',
        description: 'Whether the link should open in a new tab',
        table: {
          disable: true
        }
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

<Story name="Default" args={{ variant: 'default' }}>
  {#snippet children()}
    Button
  {/snippet}
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  {#snippet children()}
    Disabled
  {/snippet}
</Story>

<Story name="Icon" args={{ size: 'icon', variant: 'default' }}>
  {#snippet children()}
  <Settings />
  {/snippet}
</Story>

<Story name="Link" args={{ variant: 'default', href: 'https://example.com', newTab: true }} argTypes={{
  href: {
    table: {
      disable: false
    }
  },
  newTab: {
    table: {
      disable: false
    }
  },
}}>
  {#snippet children()}
    Link
  {/snippet}
</Story>

<Story name="Link Text" args={{ href: 'https://example.com', variant: 'link', newTab: true }} argTypes={{
  href: {
    table: {
      disable: false
    }
  },
  newTab: {
    table: {
      disable: false
    }
  },
}}>
  {#snippet children()}
    Link Text
  {/snippet}
</Story>

<Story name="With Icon" args={{ variant: 'default' }}>
  {#snippet children()}
   <Settings />
    Button with Icon
  {/snippet}
</Story>
