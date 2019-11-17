<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

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
        cover_image (width: 770, height: 380, blur: 10)
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
