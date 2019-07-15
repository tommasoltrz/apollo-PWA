import {Inject, ModuleWithProviders, NgModule, PLATFORM_ID} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS, Apollo} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {persistCache} from 'apollo-cache-persist';
import {CommonModule} from '@angular/common';
import {ApolloLink} from 'apollo-link';


// const cache = new InMemoryCache({
//   dataIdFromObject: (object: any) => {
//     console.log('InMemoryCache', object.__typename, object);
//   }
// });



// await before instantiating ApolloClient, else queries might run before the cache is persisted
// await persistCache({
//   cache,
//   storage: window.localStorage,
// });





@NgModule({
  exports: [HttpClientModule, ApolloModule, HttpLinkModule],
  declarations: [],
  imports: [
    CommonModule]
})
export class GraphQLModule {


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    httpClient: HttpClient,
    apollo: Apollo
  ) {
    const cache = new InMemoryCache;

    const link = ApolloLink.from( [
      new HttpLink(httpClient).create({uri: 'http://localhost:7474/graphql/'}),
    ]);

    this.initApollo(apollo, link, cache);
  }

  private async initApollo(apollo: Apollo, link: ApolloLink, cache: InMemoryCache) {
    await persistCache({
      cache,
      storage: window.localStorage
    });

    apollo.create({
      link,
      cache: cache,
      defaultOptions: {
        watchQuery: {
          errorPolicy: 'all',
          fetchPolicy: 'cache-and-network'
        },
        query: {
          errorPolicy: 'all'
        },
        mutate: {
          errorPolicy: 'all'
        }
      }
    });
  }

}
