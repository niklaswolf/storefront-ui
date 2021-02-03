import { SfRange } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Range",
  component: SfRange,
  argTypes: {
    value: {
      control: {
        type: "array",
      },
      table: {
        category: "Props",
      },
      defaultValue: {
        summary: [0, 1],
      },
      description: "value",
    },
    disabled: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: {
        summary: false,
      },
      description: "Disabled",
    },
    config: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: {
        start: [0,1],
        range: {
          min: 0,
          max: 10,
        },
        step: 1,
        connect: true,
        direction: "ltr",
        orientation: "horizontal",
        behaviour: "tap-drag",
        tooltips: true,
        format: {
          to: function (value) {
            return new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(value);
          },
          from: function (value) {
            const parsedValue = new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).formatToParts(value);
            return parsedValue[0].value;
          },
        },
        keyboardSupport: true,
      },
      description: "Configuration",
    },
    change: { action: "New value", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfRange },
  props: Object.keys(argTypes),
  template: `
  <div style="padding: 100px">
    <SfRange
      v-model="value"
      :disabled="disabled"
      :config="config"        
      @change="change"
    />  
  </div>`,
});

export const Common = Template.bind({});
Common.args = {
  disabled: false,
};

export const OneSlider = Template.bind({});
OneSlider.args = {
  ...Common.args,
  value: {
    control: {
      type: "range",
      min: 0,
      max: 10,
      step: 1,
    },
    table: {
      category: "Props",
    },
    defaultValue: {
      summary: 0,
    },
    description: "value",
  },
  config: {
    start: 0,    
    range: {
      min: 0,
      max: 10,
    },
    step: 1,
    connect: true,
    direction: "ltr",
    orientation: "horizontal",
    behaviour: "tap-drag",
    tooltips: true,
    format: {
      to: function (value) {
        console.log('to', value);
        return new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(value);
      },
      from: function (value) {
        console.log('from', value);
        const parsedValue = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).formatToParts(value);
        return parsedValue[0].value;
      },
    },
    keyboardSupport: true,
  },
};