import React from 'react';
import ReactDOM from 'react-dom';
import Swiper from 'react-swiper';
import { Appbar, Container, Button, Panel } from 'muicss/react';

const img = [
  'http://up.gc-img.net/post_img/2015/03/j92VEIIZFCcezpj_p64xF_3.jpeg',
  'https://s3.amazonaws.com/cfo-upload_production/tax_accountant_image/c71a1324acbf958ef922649d02fea09f20150314155623',
  'http://blogs.c.yimg.jp/res/blog-81-3f/moon_cinema2003/folder/338205/09/3278909/img_0?1304662202',
  'http://event-checker.blog.so-net.ne.jp/_images/blog/_e01/event-checker/chidorigafuchi-sakura01.jpg',

]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }

  onClick() {
    let new_num = Math.floor(Math.random() * img.length );
    if(new_num !== this.state.num ) this.setState({ num: new_num })
  }

  render() {
    let image = img[this.state.num];
    return (
  <div>
    <Appbar ><h1>Sakura</h1></Appbar>
    <Container>
      <Panel>
        <img src={ image } style={{ width: "100%", borderRadius: '5px'}} onTouchStart={this.onClick.bind(this)} />
      </Panel>
      <button type="button" onClick={this.onClick.bind(this)}>Change</button>
    </Container>
  </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
