import { Layout } from '../../components/Layout/Layout';
import Card from '../../components/Card/Card'
import { TitleMenu } from '../../components/TitleMenu/TitleMenu';
import { CreateForm } from '../../components/CreateForm/CreateForm';

export function Menu() {

    return (
      <Layout>
        <TitleMenu/>
        <Card/>
        <CreateForm/>
      </Layout>
    )
  }
