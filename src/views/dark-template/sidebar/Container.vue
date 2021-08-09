<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          안 <span class="light-blue--text text--lighten-3">재성</span>
        </h1>
        <span>
          지속가능한 개발자, 소통이 되는 개발자
        </span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{item}">
          <v-chip>
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{items}">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template
                v-for="(item, i) in items"
              >
                <v-flex
                  :key="i"
                  md3
                  sm4
                  xs6
                >
                  <v-progress-circular
                    rotate="360"
                    size="65"
                    width="2"
                    :value="item.value"
                    color="white"
                    class="ma-2"
                  >
                    {{ item.text }}
                  </v-progress-circular>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: '이메일',
              icon: 'mdi-email',
              text: 'jindam91@gmail.com',
            },
            {
              name: '생일',
              icon: 'mdi-cake-variant',
              text: '1991. 08. 28',
            },
            {
              name: '거주지',
              icon: 'mdi-map-marker',
              text: '경기도 성남시 분당구 금곡동',
            },
          ],
        },
        socials: {
          title: 'SOCIALS',
          items: [
            {
              icon: 'mdi-github-circle',
              text: 'github.com/AnJaeSeongS2',
              link: 'https://github.com/AnJaeSeongS2',
            },
            {
              icon: 'mdi-instagram',
              text: 'instagram.com/jaeseong__an',
              link: 'https://www.instagram.com/jaeseong__an/',
            },
          ],
        },
        hobbies: {
          title: 'HOBBIES',
          items: [
            {
              icon: 'mdi-image-filter-hdr',
              text: '힐링 여행',
            },
            {
              icon: 'mdi-karate',
              text: '적당한 운동',
            },
            {
              icon: 'mdi-music',
              text: '음악 감상 (Spotify)',
            },
            {
              icon: 'mdi-account-group',
              text: 'T.G.WinG 동아리 활동',
            },
            {
              icon: 'mdi-book-open-page-variant',
              text: '개인 공부',
            },
          ],
        },
        languages: {
          title: 'LANGUAGES',
          items: [
            {
              text : 'Korean',
              value: 100,
            },
            {
              text : 'English',
              value: 55,
            },
            {
              text : 'Japanese',
              value: 30,
            },
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.sidebar{
    background: #2e2e2e;
}
</style>
