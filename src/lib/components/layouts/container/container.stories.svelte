<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Container from './container.svelte';
	import StoryWrapper from '../../utility/story-wrapper.svelte';

  const { Story } = defineMeta({
    title: 'Layouts/Container',
    component: Container,
    argTypes: {
      size: {
        control: 'select',
        description: 'The size of the button',
        table: {
          defaultValue: { summary: 'default' },
        },
      },
      ref: {
        control: false,
        description: 'The ref of the container',
      },

    },
    args: {
      size: 'default',
    }
  });
</script>

<Story name="Default" args={{ size: 'base' }}>
  {#snippet children()}
   <StoryWrapper class="bg-red-500 h-50 text-white text-3xl">
    Container
   </StoryWrapper>
  {/snippet}
</Story>
