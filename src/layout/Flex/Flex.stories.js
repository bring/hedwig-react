import React from 'react';
import Flex from './Flex';
import Card from '../../components/Card/Card';

export default {
  title: 'Layout/Flex',
  component: Flex
};

const Template = (args) => 
    <Flex {...args}>
        <Card title="Card" imgUrl="http://placekitten.com/600/337"></Card>
        <Card title="Card" imgUrl="http://placekitten.com/600/337"></Card>
        <Card title="Card" imgUrl="http://placekitten.com/600/337"></Card>
        <Card title="Card" subtitle="I'm the subtitle" imgUrl="http://placekitten.com/600/337"></Card>
        <Card title="Card" imgUrl="http://placekitten.com/600/337"></Card>
    </Flex>;

export const Default = Template.bind({});
