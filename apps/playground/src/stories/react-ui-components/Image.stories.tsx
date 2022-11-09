import React from "react";
import { Image } from "@nanlabs/react-lib-ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Image",
  component: Image,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    initialSrc: "https://picsum.photos/300",
    src: "https://files.worldwildlife.org/wwfcmsprod/images/Panda_in_Tree/hero_small/99i33zyc0l_Large_WW170579.jpg",
    fallback: ["https://picsum.photos/300", "https://picsum.photos/200"],
    delay: 1000,
    maxRetry: 3,
    retryDelay: 1000,
    decoding: "async",
    loading: "lazy",
    className: "async-image",
    onLoad: () => console.log("onLoad"),
    style: {
      width: "300px",
      height: "300px",
    },
    initialTimeout: 1000,
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialSrc: "https://picsum.photos/300",
  src: "https://files.worldwildlife.org/wwfcmsprod/images/Panda_in_Tree/hero_small/99i33zyc0l_Large_WW170579.jpg",
  fallback: ["https://picsum.photos/300", "https://picsum.photos/200"],
  maxRetry: 3,
  retryDelay: 1000,
  decoding: "async",
  loading: "lazy",
  className: "async-image",
  onLoad: () => console.log("onLoad"),
  style: {
    width: "300px",
    height: "300px",
  },
  initialTimeout: 1000,
};
