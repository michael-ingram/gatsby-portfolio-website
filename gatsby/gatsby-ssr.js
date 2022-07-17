import React from 'react';
import Layout from './src/components/Layout';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fontsource/ibarra-real-nova';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fontsource/the-nautigal';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
