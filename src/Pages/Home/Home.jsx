
import React from 'react';
import { InfoHome } from '../../components/InfoHome/InfoHome';
import { Layout } from '../../components/Layout/Layout';
import { DetailsResto } from '../../components/DetailsResto/DetailsResto';


export function Home() {

    return (
      <Layout>
        <InfoHome/>
        <DetailsResto/>
      </Layout>
    )
  }