<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        title="자기 소개"
      >
        저는 꾸준히 공부하는 것을 습관화 했습니다. 스터디, 교류, 동아리 또한 끊이질 않고 참여하고 있습니다. 이는 팀 차원에서 필요한 개발자는 어떤 부류의 사람일까에 대해 고민한 결과입니다. 제가 만약 팀원을 선택할 수 있다면 어떤 사람을 선택하고 싶을까? 라는 자문을 해보니, 그 사람이 모듈화에 능하고 테스트관리에 능해 지속가능한 개발자 혹 다방면으로 소통이 되는 개발자이길 원하고 있었습니다.
        따라서 저는 그런 개발자를 목표로 하고 있습니다. 지금의 과정이 향후 몇년 뒤 프로젝트 리더로써 개발과 프로젝트관리 타 팀과의 소통에서 역량을 보여줄 것이라 생각합니다.
      </content-section>
      <content-section
        v-if="works"
        title="현업"
      >
        <v-layout
          v-for="(work, i) in works"
          :key="i"
        >
          <v-flex
            md1
            xs3
          >
            <v-icon right>
              {{ work.icon }}
            </v-icon>
          </v-flex>
          <v-flex
            md11
            xs9
          >
            <p>
              <strong><a
                v-if="work.t_href"
                :href="work.t_href"
              >{{ work.t_pre }}</a>{{ work.text }}</strong><br>
              <small>{{ work.source }}</small>
            </p>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="prouds"
        title="대외 활동"
      >
        <v-layout
          v-for="(proud, i) in prouds"
          :key="i"
        >
          <v-flex md4>
            {{ proud.year }}
          </v-flex>
          <v-flex md8>
            <strong v-if="proud.title">{{ proud.title }}</strong><br>
            <small v-if="proud.description"><a :href="proud.desc_href">{{ proud.description }}</a></small>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="educations"
        title="공부"
      >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md4>
            {{ education.from }} - {{ education.to }}
          </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="skills"
        id="to-timeline"
        title="취득한 기술"
      >
        <template slot="actions">
          (% 지표는 progressbar로 표기)
        </template>
        <v-layout wrap>
          <template
            v-for="(skill, i) in skills"
          >
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
              xs12
            >
              <div
                class="mr-2 ml-2"
              >
                <div class="align-center">
                  <v-icon
                    small
                  >
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    works: [
      {
        icon  : 'mdi-cloud',
        t_pre : 'WAS 제품',
        text  : '의 CloudManager 모듈 개발',
        source: 'TmaxSoft',
        t_href: 'https://kr.tmaxsoft.com/product/productView.do?prod_cd=jeus',
      },
      {
        icon  : 'mdi-shield-lock-outline',
        text  : 'WAS 제품의 Security 모듈 개발 및 유지보수',
        source: 'TmaxSoft',
      },
      {
        icon  : 'mdi-playlist-edit',
        text  : 'WAS 제품의 ConfigurationManager 모듈 개발 및 유지보수',
        source: 'TmaxSoft',
      },
      {
        icon  : 'mdi-television-guide',
        text  : 'WAS 제품의 Webadmin Backend & Frontend 모듈 개발',
        source: 'TmaxSoft',
      },
      {
        icon  : 'mdi-application-export',
        t_pre : 'Re-hosting 제품',
        text  : '의 Webadmin Frontend 신규 개발',
        source: 'TmaxSoft',
        t_href: 'https://kr.tmaxsoft.com/product/productView.do?prod_cd=openframe',
      },
    ],
    educations: [
      {
        from       : '2018',
        to         : '2018 (수료)',
        title      : '데이터베이스 엔지니어링 향상과정',
        location   : '쌍용교육센터',
        description: '',
      },
      {
        from       : '2011',
        to         : '2016 (학부졸업)',
        title      : '컴퓨터공학과',
        location   : '경희대학교',
        description: '',
      },
    ],
    prouds: [
      {
        title      : 'SQLD 자격증 취득',
        year       : '2019',
        description: '한국데이터산업진흥원',
        desc_href  : 'https://www.dataq.or.kr/www/sub/a_04.do',
      },
      {
        title      : '부산 ICT 해카톤',
        year       : '2016',
        description: 'NBbangPay 앱 개발',
        desc_href  : 'https://github.com/AnJaeSeongS2/NBbangPay',
      },
      {
        title      : 'acm-icpc 한국 지역 본선 대회 - 17위',
        year       : '2015',
        description: 'ByeongTeuk Jom Team으로 참가',
        desc_href  : 'http://icpckorea.org/2015-daejeon/regional',
      },
      {
        title      : '지능형 모형차 경진대회 본선 진출',
        year       : '2015',
        description: '한양대 ACELab이 주관하는 대회',
        desc_href  : 'https://github.com/AnJaeSeongS2/SmartModelCarContest2015',
      },
      {
        title: '창조경제 ICT 해커톤',
        year : '2015',
      },
    ],
    skills: [
      {
        title: 'PHP',
        icon : 'mdi-language-php',
        value: 95,
      },
      {
        title: 'JavaScript',
        icon : 'mdi-language-javascript',
        value: 80,
      },
      {
        title: 'Laravel Framework',
        icon : 'mdi-laravel',
        value: 90,
      },
      {
        title: 'Vue.js Framework',
        icon : 'mdi-vuejs',
        value: 90,
      },
      { divider: true },
      {
        title: 'Ubuntu Server',
        icon : 'mdi-ubuntu',
        value: 70,
      },
      {
        title: 'CentOS Server',
        icon : 'mdi-linux',
        value: 47,
      },
      {
        title: 'Web Application Security',
        icon : 'mdi-shield-lock',
        value: 80,
      },
      {
        title: 'Test Driven Development',
        icon : 'mdi-test-tube',
        value: 26,
      },
      {
        title: 'Continuous Integration / Continuous Delivery',
        icon : 'mdi-truck-fast',
        value: 35,
      },
      {
        title: 'Git',
        icon : 'mdi-git',
        value: 67,
      },
      { divider: true },
      {
        title: 'Hardware Development',
        icon : 'mdi-chip',
        value: 29,
      },
      {
        title: 'C/C++',
        icon : 'mdi-language-cpp',
        value: 38,
      },
      { divider: true },
      {
        title: 'Leadership',
        icon : 'mdi-account-group',
        value: 68,
      },
      {
        title: 'Content Marketing (+340 articles)',
        icon : 'mdi-text',
        value: 96,
      },
    ],
  }),
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>
