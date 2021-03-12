<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        title="자기 소개"
      >
        저는 꾸준히 폭넓게 공부하는 것을 습관화 했습니다. 또한 스터디, 동아리 등의 활동도 끊이질 않고 참여하고 있습니다.<br>
        이 꾸준한 공부와 대외 활동들은 양분이 되어 팀개발에 시너지를 낼 개발자가 탄생한다고 생각합니다. 모듈화에 능하고 테스크 관리에 능해 지속가능한 개발자면서, 유기적으로 연결된 넓은 지식으로 누구와도 소통이 되는 개발자를 목표로 삼고 지속 성장중입니다.<br>
        향후 제가 프로젝트 리더로 활동할 시기가 오면, 이 활동들이 도움이 돼 리더의 업무인 프로젝트관리 및 타 팀과의 소통부분에서 높은 역량을 보여줄 것이라 생각합니다.<br>
        최근에는 현업에서 vue.js의 vuex, scala의 akka의 구조를 응용해 FW를 설계 및 구현했으며, TDD와 DDD같은 개발 패러다임도 공부해 접목시키고, 모듈간의 관계에도 신경쓰며 개발하고 있으며, 클라우드용 이미지의 빌드 및 배포 자동화도 직접 구성해 관리중입니다. 제가 맡은 모듈 뿐만 아니라 프로젝트의 전체를 체계적으로 관리하려 노력하고있습니다.<br>
        이처럼 저는 같이 일하고 싶은 개발자를 최우선 목표로 다방면으로 공부하고 있으며, 현업에서도 실 적용하고 있습니다.
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
            <div v-if="education.desc_href">
              <a :href="education.desc_href">
                {{ education.description }}
              </a>
            </div>
            <div v-else>
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
        from       : '2019',
        to         : '2019',
        title      : '라 스칼라 코딩단 scala with DDD & Cats 오프라인 스터디 참여',
        description: '라 스칼라 코딩단',
        desc_href  : 'https://groups.google.com/g/scala-korea',
      },
      {
        from       : '2018',
        to         : '2018 (수료)',
        title      : '데이터베이스 엔지니어링 향상과정',
        description: '쌍용교육센터',
        desc_href  : 'https://www.sist.co.kr/',
      },
      {
        from       : '2011',
        to         : '현재',
        title      : 'T.G.WinG 학술동아리 스터디 참여',
        description: 'T.G.WinG',
        desc_href  : 'https://github.com/TG-WinG',
      },
      {
        from       : '2011',
        to         : '2017 (학부졸업)',
        title      : '컴퓨터공학과',
        description: '경희대학교',
        desc_href  : 'http://ce.khu.ac.kr/',
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
        title: 'JavaScript',
        icon : 'mdi-language-javascript',
        value: 50,
      },
      {
        title: 'Vue.js Framework',
        icon : 'mdi-vuejs',
        value: 40,
      },
      { divider: true },
      {
        title: 'Ubuntu Server',
        icon : 'mdi-ubuntu',
        value: 50,
      },
      {
        title: 'Web Application Security',
        icon : 'mdi-shield-lock',
        value: 50,
      },
      {
        title: 'Test Driven Development',
        icon : 'mdi-test-tube',
        value: 40,
      },
      {
        title: 'Domain Driven Development',
        icon : 'mdi-test-tube',
        value: 30,
      },
      {
        title: 'Continuous Integration / Continuous Delivery',
        icon : 'mdi-truck-fast',
        value: 60,
      },
      {
        title: 'Git',
        icon : 'mdi-git',
        value: 67,
      },
      {
        title: 'Svn',
        icon : 'mdi-svn',
        value: 40,
      },
      { divider: true },
      {
        title: 'Web Application Server Development',
        icon : 'mdi-chip',
        value: 60,
      },
      {
        title: 'Spring Framework + etc...',
        icon : 'mdi-spring',
        value: 60,
      },
      {
        title: 'Java',
        icon : 'mdi-language-java',
        value: 75,
      },
      {
        title: 'Scala',
        icon : 'mdi-language-scala',
        value: 40,
      },
      { divider: true },
      {
        title: 'Leadership',
        icon : 'mdi-account-group',
        value: 68,
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
