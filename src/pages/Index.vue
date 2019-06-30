<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />
    
    <div class="post-card content-box" style="border-radius: 25px;">
      <div class="post-card__content">
        <h2 class="post-card__title" style="text-align: center;">🔧 Sito in costruzione</h2>
        <p class="post-card__description"  style="margin: 0px;">
          Sto ancora finendo di importare i vecchi articoli da <a href="http://enibeer.blogspot.com/" target="_blank">Enibeer</a><br/>
          Ci sarà anche qualche cambiamento allo stile e verranno aggiunte nuove funzionalità.
        </p>
      </div>
      </div>

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      
    </div>
    <Pager :info="$page.posts.pageInfo"/>
  </Layout>
</template>

<page-query>
query Blog($page: Int){
  posts: allPost(perPage: 10, page: $page, filter: { published: { eq: true }}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "DD/MM/YYYY")
        timeToRead
        description
        coverImage (width: 770, blur: 10)
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import { Pager } from 'gridsome'

export default {
  components: {
    Author,
    PostCard,
    Pager
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
