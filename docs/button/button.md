# Button

## Usage

```jsx
import { Button } from 'radiance-ui';
import { CheckmarkIcon } from 'radiance-ui/lib/icons';

<React.Fragment>
  <Button.Container>
    <Button>Primary Button</Button>
    <Button buttonType="secondary">Secondary Button</Button>
    <Button buttonType="tertiary">Tertiary Button</Button>
    <Button buttonType="quaternary">Quaternary Button</Button>
    <Button disabled>Disabled Button</Button>
    <Button isFullWidth>Full Width Button</Button>

    <Button isLoading>Primary Loading</Button>
    <Button isLoading buttonType="secondary">
      Secondary Loading
    </Button>
    <Button buttonType="tertiary" isLoading>
      Tertiary Loading
    </Button>
    <Button buttonType="quaternary" isLoading>
      Quaternary Loading
    </Button>
    <Button isFullWidth isLoading>
      Full Width Loading
    </Button>
  </Button.Container>

  <Button.Container>
    <Button icon={<CheckmarkIcon />}>Primary Button</Button>
    <Button buttonType="secondary" icon={<CheckmarkIcon />}>
      Secondary Button
    </Button>
    <Button buttonType="tertiary" icon={<CheckmarkIcon />}>
      Tertiary Button
    </Button>
    <Button buttonType="quaternary" icon={<CheckmarkIcon />}>
      Quaternary Button
    </Button>
    <Button disabled icon={<CheckmarkIcon />}>
      Disabled Button
    </Button>
    <Button isFullWidth icon={<CheckmarkIcon />}>
      Full Width Button
    </Button>

    <Button isLoading icon={<CheckmarkIcon />}>
      Primary Loading
    </Button>
    <Button isLoading buttonType="secondary" icon={<CheckmarkIcon />}>
      Secondary Loading
    </Button>
    <Button isLoading buttonType="tertiary" icon={<CheckmarkIcon />}>
      Tertiary Loading
    </Button>
    <Button isLoading buttonType="quaternary" icon={<CheckmarkIcon />}>
      Quaternary Loading
    </Button>
    <Button isLoading isFullWidth icon={<CheckmarkIcon />}>
      Full Width Loading
    </Button>
  </Button.Container>
</React.Fragment>;
```

## With Color

```jsx
import { Button } from 'radiance-ui';
import { COLORS } from 'radiance-ui/lib/constants';

<React.Fragment>
  <Button.Container>
    <Button buttonColor={COLORS.statusRed}>Primary Button</Button>
    <Button buttonColor={COLORS.statusRed} buttonType="secondary">
      Secondary Button
    </Button>
    <Button buttonColor={COLORS.statusRed} buttonType="tertiary">
      Tertiary Button
    </Button>
    <Button buttonColor={COLORS.statusRed} buttonType="quaternary">
      Quaternary Button
    </Button>
    <Button buttonColor={COLORS.statusRed} disabled>
      Disabled Button
    </Button>
    <Button buttonColor={COLORS.statusRed} isFullWidth>
      Full Width Button
    </Button>

    <Button buttonColor={COLORS.statusRed} isLoading>
      Primary Loading
    </Button>
    <Button buttonColor={COLORS.statusRed} isLoading buttonType="secondary">
      Secondary Loading
    </Button>
    <Button buttonColor={COLORS.statusRed} buttonType="tertiary" isLoading>
      Tertiary Loading
    </Button>
    <Button buttonColor={COLORS.statusRed} buttonType="quaternary" isLoading>
      Quaternary Loading
    </Button>
    <Button buttonColor={COLORS.statusRed} isFullWidth isLoading>
      Full Width Loading
    </Button>
  </Button.Container>
</React.Fragment>;
```

<!-- STORY -->

### Proptypes

| prop        | propType | required | default  | description                                                                                                                  |
| ----------- | -------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| buttonType  | string   | no       | primary  | Determines the button's main style theme. Must be one of `primary`, `secondary`, `tertiary`, `quaternary`.                   |
| buttonColor | string   | no       | primary  | Determines the color of the button . Must be one of the predefined colors (e.g. `primary`, `statusRed`, `statusGreen`, etc). |
| children    | node     | yes      | -        | node to be rendered inside the button. Recommended to be the button text                                                     |
| disabled    | bool     | no       | false    | when disabled, click listener will not be called and the UI will look disabled                                               |
| icon        | node     | no       | null     | icon to render in the button. Recommended to use one of Radiance's icons                                                     |
| isLoading   | bool     | no       | false    | renders loading state and prevents click listener from being called                                                          |
| onClick     | func     | no       | () => {} | callback function called on click of the button                                                                              |
| textColor   | string   | no       | ''       | color (as a string) that will override existing text, icon, and loading colors for the button (except when disabled is true) |
| isFullWidth | bool     | no       | false    | adjusts the default button styles so that the button takes the full width of the container. Intended for mobile-use only.    |

### Notes

Buttons can be used as a main call-to-action (CTA). Try to avoid using
buttons of the same `buttonType` next to each other since we want to
guide the user towards one option.

`<Button.Container>` can be used to provide spacing between multiple
buttons and behavior on various screen sizes. See the dedicated
Readme/Story for more details.

We should generally try to use the default button color when possible. Only for special cases should we need to use a different button color.
