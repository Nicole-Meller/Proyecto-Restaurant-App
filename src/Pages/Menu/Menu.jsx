import Layout from '../../components/Layout/Layout'
import Card from '../../components/Card/Card'
import { Form } from '../../components/Form/form';
import { TitleMenu } from '../../components/TitleMenu/TitleMenu';

function Menu() {

    return (
      <Layout>
        <TitleMenu/>
        <Card/>
        <Form/>
      </Layout>
    )
  }

  export default Menu;