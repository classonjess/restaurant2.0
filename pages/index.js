import React, { useState } from "react";
import Cart from "./restaurants/cart"
import '@stripe/stripe-js';
import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import RestaurantList from './restaurants/restaurantList';
import { InputGroup, InputGroupAddon,Input} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    const [query, setQuery] = useState("");
    const link = new HttpLink({ uri: 'http://localhost:1337/graphql'})
    const cache = new InMemoryCache()
    const client = new ApolloClient({link,cache});
 
  
    return (
        <ApolloProvider client={client}>
          <div className="search">
              <h2> Local Restaurants</h2>
                <InputGroup >
                <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                <Input
                    onChange={(e) =>
                    setQuery(e.target.value.toLocaleLowerCase())
                    }
                    value={query}
                />
                </InputGroup><br></br>
            </div>
            <RestaurantList search={query} />
            <Cart> </Cart>
        </ApolloProvider>
    );
  }
  export default Home;