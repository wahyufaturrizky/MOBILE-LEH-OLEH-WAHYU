import React, { Component } from "react";
import Carousel from 'react-native-banner-carousel';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Item,
  Input,
  Form,
  Card,
  CardItem,
  Thumbnail,
  Body,
  Grid,
  Col,
  H3,
  Badge
} from "native-base";

import { 
  Image,
  View,
  Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

const logo = require("../../assets/img/watch_220px.png");
const cardImage = require("../../../assets/drawer-cover.png");

const images = [
  "../../assets/img/banner01.jpg",
  "../../assets/img/banner01.jpg",
  "../../assets/img/banner01.jpg"
];

class Anatomy extends Component {

  renderPage(image, index) {
    return (
    <View key={index}>
      <Image style={{ width: BannerWidth, height: BannerHeight }}
        source={require("../../assets/img/banner01.jpg",)} />
      <View
        style={{width: '100%', height: 280, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0)', position: 'absolute'}}>
      </View>
    </View>
    );
    }

  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Carousel autoplay autoplayTimeout={5000} loop index={0} pageSize={BannerWidth}>
          {images.map((image, index) => this.renderPage(image, index))}
        </Carousel>
        <View style={{position: "absolute",left: 8, right: 8}}>
          <Header style={{paddingLeft: 0}} transparent androidStatusBarColor="#fff">
            <Left>
              <Button style={{paddingLeft: 0}} transparent onPress={() => this.props.navigation.openDrawer()}>
                <Icon style={{color: "#fff"}} type="SimpleLineIcons" name="menu" />
              </Button>
            </Left>
            <Right/>
          </Header>
          <View style={{position: "absolute",left: 8, right: 8, top: 255}}>
            <Form style={{backgroundColor: "white"}} searchBar rounded>
            <Item>
              <Input placeholder="What are you looking for?" />
              <Icon active name="search" />
            </Item>
          </Form>
          </View>
        </View>

        <ScrollView style={{marginTop: 50}} >
          <Content padder>
            <Grid>
              <Col>
                <Card style={styles.mb}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text style={{fontSize: 13}}>Accessories</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Thumbnail source={logo} />
                    </Right>
                  </CardItem>
                </Card>
              </Col>

              <Col style={{marginLeft: 8}}>
                <Card>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text style={{fontSize: 13}}>Accessories</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Thumbnail source={logo} />
                    </Right>
                  </CardItem>
                </Card>
              </Col>
            </Grid>

            <Grid style={{marginTop: 8}}>
              <Col>
                <Card>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text style={{fontSize: 13}}>Accessories</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Thumbnail source={logo} />
                    </Right>
                  </CardItem>
                </Card>
              </Col>
              <Col style={{marginLeft: 8}}>
                <Card>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text style={{fontSize: 13}}>Accessories</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Thumbnail source={logo} />
                    </Right>
                  </CardItem>
                </Card>
              </Col>
            </Grid>

            <Grid style={{marginTop: 8}}>
              <Col>
                <Card>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text style={{fontSize: 13}}>Accessories</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Thumbnail source={logo} />
                    </Right>
                  </CardItem>
                </Card>
              </Col>
              <Col style={{marginLeft: 8}}>
                <Card>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text style={{fontSize: 13}}>Accessories</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Thumbnail source={logo} />
                    </Right>
                  </CardItem>
                </Card>
              </Col>
            </Grid>

            {/* Shops We Like */}
            <H3 style={{marginTop: 24}}>Shops we like</H3>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Grid>
                <Col>
                <Card style={{marginTop: 8, marginLeft: 12}}>
                  <CardItem cardBody>
                    <Image style={{
                      resizeMode: "cover",
                      width: null,
                      height: 100,
                      flex: 1
                      }} source={cardImage} />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Text>Pink Tulip Loom Crochet</Text>
                    </Left>
                    <Body />
                    <Right />
                  </CardItem>
                </Card>
                </Col>
                <Col>
                <Card style={{marginTop: 8, marginLeft: 12}}>
                  <CardItem cardBody>
                    <Image style={{
                      resizeMode: "cover",
                      width: null,
                      height: 100,
                      flex: 1
                      }} source={cardImage} />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Text>Pink Tulip Loom Crochet</Text>
                    </Left>
                    <Body />
                    <Right />
                  </CardItem>
                </Card>
                </Col>
                <Col>
                <Card style={{marginTop: 8, marginLeft: 12}}>
                  <CardItem cardBody>
                    <Image style={{
                      resizeMode: "cover",
                      width: null,
                      height: 100,
                      flex: 1
                      }} source={cardImage} />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Text>Pink Tulip Loom Crochet</Text>
                    </Left>
                    <Body />
                    <Right />
                  </CardItem>
                </Card>
                </Col>
                <Col>
                <Card style={{marginTop: 8, marginLeft: 12}}>
                  <CardItem cardBody>
                    <Image style={{
                      resizeMode: "cover",
                      width: null,
                      height: 100,
                      flex: 1
                      }} source={cardImage} />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Text>Pink Tulip Loom Crochet</Text>
                    </Left>
                    <Body />
                    <Right />
                  </CardItem>
                </Card>
                </Col>
              </Grid>             
            </ScrollView>

            {/* Popular */}
            <H3 style={{marginTop: 24}}>Popular</H3>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Grid>
                <Col>
                  <Card style={{marginTop: 8, marginLeft: 12}}>
                    <View style={{position: "relative"}}>
                      <CardItem cardBody>
                        <Image style={{
                          resizeMode: "cover",
                          width: null,
                          height: 100,
                          flex: 1
                          }} source={cardImage} />
                      </CardItem>
                      <View style={{position: "absolute", left: 8, top: 8}}>
                        <Badge style={{backgroundColor: "#637BDF", borderRadius: 4}}>
                          <Text style={{color: "white"}}>50% Off</Text>
                        </Badge>
                      </View>
                    </View>

                    <CardItem>
                      <Left>
                        <Text>Pink Tulip Loom Crochet</Text>
                      </Left>
                      <Body/>
                      <Right/>
                    </CardItem>

                    <CardItem>
                      <Left>
                        <Text style={{color: "#637BDF"}}>19 PKR</Text>
                      </Left>

                      <Body/>

                      <Right>
                        <Icon style={{color: "#637BDF"}} type="SimpleLineIcons" name="basket-loaded" />
                      </Right>
                    </CardItem>
                  </Card>
                </Col>
                <Col>
                  <Card style={{marginTop: 8, marginLeft: 12}}>
                    <View style={{position: "relative"}}>
                      <CardItem cardBody>
                        <Image style={{
                          resizeMode: "cover",
                          width: null,
                          height: 100,
                          flex: 1
                          }} source={cardImage} />
                      </CardItem>
                      <View style={{position: "absolute", left: 8, top: 8}}>
                        <Badge style={{backgroundColor: "#637BDF", borderRadius: 4}}>
                          <Text style={{color: "white"}}>50% Off</Text>
                        </Badge>
                      </View>
                    </View>

                    <CardItem>
                      <Left>
                        <Text>Pink Tulip Loom Crochet</Text>
                      </Left>
                      <Body/>
                      <Right/>
                    </CardItem>

                    <CardItem>
                      <Left>
                        <Text style={{color: "#637BDF"}}>19 PKR</Text>
                      </Left>

                      <Body/>

                      <Right>
                        <Icon style={{color: "#637BDF"}} type="SimpleLineIcons" name="basket-loaded" />
                      </Right>
                    </CardItem>
                  </Card>
                </Col>
                <Col>
                  <Card style={{marginTop: 8, marginLeft: 12}}>
                    <View style={{position: "relative"}}>
                      <CardItem cardBody>
                        <Image style={{
                          resizeMode: "cover",
                          width: null,
                          height: 100,
                          flex: 1
                          }} source={cardImage} />
                      </CardItem>
                      <View style={{position: "absolute", left: 8, top: 8}}>
                        <Badge style={{backgroundColor: "#637BDF", borderRadius: 4}}>
                          <Text style={{color: "white"}}>50% Off</Text>
                        </Badge>
                      </View>
                    </View>

                    <CardItem>
                      <Left>
                        <Text>Pink Tulip Loom Crochet</Text>
                      </Left>
                      <Body/>
                      <Right/>
                    </CardItem>

                    <CardItem>
                      <Left>
                        <Text style={{color: "#637BDF"}}>19 PKR</Text>
                      </Left>

                      <Body/>

                      <Right>
                        <Icon style={{color: "#637BDF"}} type="SimpleLineIcons" name="basket-loaded" />
                      </Right>
                    </CardItem>
                  </Card>
                </Col>
                <Col>
                  <Card style={{marginTop: 8, marginLeft: 12}}>
                    <View style={{position: "relative"}}>
                      <CardItem cardBody>
                        <Image style={{
                          resizeMode: "cover",
                          width: null,
                          height: 100,
                          flex: 1
                          }} source={cardImage} />
                      </CardItem>
                      <View style={{position: "absolute", left: 8, top: 8}}>
                        <Badge style={{backgroundColor: "#637BDF", borderRadius: 4}}>
                          <Text style={{color: "white"}}>50% Off</Text>
                        </Badge>
                      </View>
                    </View>

                    <CardItem>
                      <Left>
                        <Text>Pink Tulip Loom Crochet</Text>
                      </Left>
                      <Body/>
                      <Right/>
                    </CardItem>

                    <CardItem>
                      <Left>
                        <Text style={{color: "#637BDF"}}>19 PKR</Text>
                      </Left>

                      <Body/>

                      <Right>
                        <Icon style={{color: "#637BDF"}} type="SimpleLineIcons" name="basket-loaded" />
                      </Right>
                    </CardItem>
                  </Card>
                </Col>
              </Grid>             
            </ScrollView>

            {/* Recomended for you */}
            <H3 style={{marginTop: 24}}>Recomended for you</H3>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Grid>
                <Col>
                  <Card style={{marginTop: 8, marginLeft: 12}}>
                    <View style={{position: "relative"}}>
                      <CardItem cardBody>
                        <Image style={{
                          resizeMode: "cover",
                          width: null,
                          height: 100,
                          flex: 1
                          }} source={cardImage} />
                      </CardItem>
                      <View style={{position: "absolute", left: 8, top: 8}}>
                        <Badge style={{backgroundColor: "#637BDF", borderRadius: 4}}>
                          <Text style={{color: "white"}}>50% Off</Text>
                        </Badge>
                      </View>
                    </View>

                    <CardItem>
                      <Left>
                        <Text>Pink Tulip Loom Crochet</Text>
                      </Left>
                      <Body/>
                      <Right/>
                    </CardItem>

                    <CardItem>
                      <Left>
                        <Text style={{color: "#637BDF"}}>19 PKR</Text>
                      </Left>

                      <Body/>

                      <Right>
                        <Icon style={{color: "#637BDF"}} type="SimpleLineIcons" name="basket-loaded" />
                      </Right>
                    </CardItem>
                  </Card>
                </Col>
                <Col>
                  <Card style={{marginTop: 8, marginLeft: 12}}>
                    <View style={{position: "relative"}}>
                      <CardItem cardBody>
                        <Image style={{
                          resizeMode: "cover",
                          width: null,
                          height: 100,
                          flex: 1
                          }} source={cardImage} />
                      </CardItem>
                      <View style={{position: "absolute", left: 8, top: 8}}>
                        <Badge style={{backgroundColor: "#637BDF", borderRadius: 4}}>
                          <Text style={{color: "white"}}>50% Off</Text>
                        </Badge>
                      </View>
                    </View>

                    <CardItem>
                      <Left>
                        <Text>Pink Tulip Loom Crochet</Text>
                      </Left>
                      <Body/>
                      <Right/>
                    </CardItem>

                    <CardItem>
                      <Left>
                        <Text style={{color: "#637BDF"}}>19 PKR</Text>
                      </Left>

                      <Body/>

                      <Right>
                        <Icon style={{color: "#637BDF"}} type="SimpleLineIcons" name="basket-loaded" />
                      </Right>
                    </CardItem>
                  </Card>
                </Col>
                <Col>
                  <Card style={{marginTop: 8, marginLeft: 12}}>
                    <View style={{position: "relative"}}>
                      <CardItem cardBody>
                        <Image style={{
                          resizeMode: "cover",
                          width: null,
                          height: 100,
                          flex: 1
                          }} source={cardImage} />
                      </CardItem>
                      <View style={{position: "absolute", left: 8, top: 8}}>
                        <Badge style={{backgroundColor: "#637BDF", borderRadius: 4}}>
                          <Text style={{color: "white"}}>50% Off</Text>
                        </Badge>
                      </View>
                    </View>

                    <CardItem>
                      <Left>
                        <Text>Pink Tulip Loom Crochet</Text>
                      </Left>
                      <Body/>
                      <Right/>
                    </CardItem>

                    <CardItem>
                      <Left>
                        <Text style={{color: "#637BDF"}}>19 PKR</Text>
                      </Left>

                      <Body/>

                      <Right>
                        <Icon style={{color: "#637BDF"}} type="SimpleLineIcons" name="basket-loaded" />
                      </Right>
                    </CardItem>
                  </Card>
                </Col>
                <Col>
                  <Card style={{marginTop: 8, marginLeft: 12}}>
                    <View style={{position: "relative"}}>
                      <CardItem cardBody>
                        <Image style={{
                          resizeMode: "cover",
                          width: null,
                          height: 100,
                          flex: 1
                          }} source={cardImage} />
                      </CardItem>
                      <View style={{position: "absolute", left: 8, top: 8}}>
                        <Badge style={{backgroundColor: "#637BDF", borderRadius: 4}}>
                          <Text style={{color: "white"}}>50% Off</Text>
                        </Badge>
                      </View>
                    </View>

                    <CardItem>
                      <Left>
                        <Text>Pink Tulip Loom Crochet</Text>
                      </Left>
                      <Body/>
                      <Right/>
                    </CardItem>

                    <CardItem>
                      <Left>
                        <Text style={{color: "#637BDF"}}>19 PKR</Text>
                      </Left>

                      <Body/>

                      <Right>
                        <Icon style={{color: "#637BDF"}} type="SimpleLineIcons" name="basket-loaded" />
                      </Right>
                    </CardItem>
                  </Card>
                </Col>
              </Grid>             
            </ScrollView>
            
          </Content>
        </ScrollView>

        <Footer>
          <FooterTab style={{backgroundColor: "white"}}>
            <Button style={{backgroundColor: "white"}} active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} style={{color: "black"}} type="SimpleLineIcons" name="home" />
            </Button>
            <Button style={{backgroundColor: "white"}} active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} style={{color: "black"}} type="SimpleLineIcons" name="magnifier" />
            </Button>
            <Button vertical badge style={{backgroundColor: "white"}} active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Badge style={{ backgroundColor: "#F5931B" }}>
                <Text>8</Text>
              </Badge>
              <Icon active={this.state.tab3} style={{color: "black"}} type="SimpleLineIcons" name="user" />
            </Button>
            <Button style={{backgroundColor: "white"}} active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon active={this.state.tab4} style={{color: "black"}} type="SimpleLineIcons" name="basket" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Anatomy;
