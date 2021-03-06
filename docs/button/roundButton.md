# Round Button

## Usage

```jsx
import { RoundButton } from 'radiance-ui';
import { CheckmarkIcon, ArrowRightIcon, ArrowLeftIcon, CrossIcon } from 'radiance-ui/lib/icons';
import { COLORS } from 'radiance-ui/lib/constants';

// Default
<RoundButton icon={<CheckmarkIcon />}>Primary</RoundButton>
<RoundButton buttonType="secondary" icon={<ArrowRightIcon />}>Secondary</RoundButton>
<RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />}>Tertiary</RoundButton>
<RoundButton buttonType="quaternary" icon={<ArrowRightIcon />}>Quaternary</RoundButton>
<RoundButton buttonType="action" icon={<CrossIcon />}>Action</RoundButton>

// Disabled
<RoundButton icon={<ArrowLeftIcon />} disabled>Primary</RoundButton>
<RoundButton
    buttonType="secondary"
    icon={<ArrowRightIcon />}
    disabled
>
    Secondary
</RoundButton>
<RoundButton
    buttonType="tertiary"
    icon={<ArrowLeftIcon />}
    disabled
>
    Tertiary
</RoundButton>
<RoundButton
    buttonType="quaternary"
    icon={<ArrowRightIcon />}
    disabled
>
    Quaternary
</RoundButton>
<RoundButton
    buttonType="action"
    icon={<CrossIcon />}
    disabled
>
    Action
</RoundButton>

// Loading
<RoundButton icon={<ArrowLeftIcon />} isLoading>Primary</RoundButton>
<RoundButton
    buttonType="secondary"
    icon={<ArrowRightIcon />}
    isLoading
>
    Secondary
</RoundButton>
<RoundButton
    buttonType="tertiary"
    icon={<ArrowLeftIcon />}
    isLoading
>
    Tertiary
</RoundButton>
<RoundButton
    buttonType="quaternary"
    icon={<ArrowRightIcon />}
    isLoading
>
    Quaternary
</RoundButton>
<RoundButton
    buttonType="action"
    icon={<CrossIcon />}
    isLoading
>
    Action
</RoundButton>

// Color
<RoundButton buttonColor={COLORS.statusRed} icon={<CheckmarkIcon />}>
  Primary
</RoundButton>

<RoundButton
  buttonColor={COLORS.statusRed}
  buttonType="secondary"
  icon={<ArrowRightIcon />}
>
  Secondary
</RoundButton>

<RoundButton
  buttonColor={COLORS.statusRed}
  buttonType="tertiary"
  icon={<ArrowLeftIcon />}
>
  Tertiary
</RoundButton>

<RoundButton
  buttonColor={COLORS.statusRed}
  buttonType="quaternary"
  icon={<ArrowRightIcon />}
>
  Quaternary
</RoundButton>

<RoundButton
    buttonColor={COLORS.statusRed}
    buttonType="action"
    icon={<CrossIcon />}
>
  Action
</RoundButton>

// Within RoundButton.Container (with multi prop)
<RoundButton.Container multi>
  <RoundButton icon={<ArrowLeftIcon />} />
  <RoundButton icon={<ArrowRightIcon />} />
</RoundButton.Container>
```

<!-- STORY -->

### Proptypes

| prop        | propType | required | default  | description                                                                                                                  |
| ----------- | -------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| buttonType  | string   | no       | primary  | Determines the button's main style theme. Must be one of `primary`, `secondary`, `tertiary`, `quaternary`, `action`.         |
| buttonColor | string   | no       | primary  | Determines the color of the button . Must be one of the predefined colors (e.g. `primary`, `statusRed`, `statusGreen`, etc). |
| children    | node     | yes      | -        | node to be rendered inside the button. Recommended to be the button text                                                     |
| disabled    | bool     | no       | false    | when disabled, click listener will not be called and the UI will look disabled                                               |
| icon        | node     | yes      | null     | icon to render in the button. Recommended to use one of Radiance's icons                                                     |
| isLoading   | bool     | no       | false    | renders loading state and prevents click listener from being called                                                          |
| onClick     | func     | no       | () => {} | callback function called on click of the button                                                                              |
| textColor   | string   | no       | ''       | color (as a string) that will override existing text, icon, and loading colors for the button (except when disabled is true) |

### Notes

`<RoundButton />` behaves mostly the same as `<Button />` except that it
requires an `icon` prop since that is the main content placed with in
the round button. Any children of the component will be rendered
immediately below the round button.

`<RoundButton.Container>` can be used to wrap `<RoundButton />` components.
Since it has some opinions on width and spacing, the max number of
buttons you want to wrap is **2**.

We should generally try to use the default button color when possible. Only for special cases should we need to use a different button color.
