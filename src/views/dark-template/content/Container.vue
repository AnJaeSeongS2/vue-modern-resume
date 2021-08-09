<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        title="자기 소개"
      >
        저는 꾸준히 폭넓게 공부하는 것을 습관화 했고 스터디 참여도 꾸준히 하고 있습니다. 제 본업인 server 개발 뿐만 아니라, cloud, client측 신 기술도 학습하고 있습니다. 예를들면 k8s pattern, flutter, vue.js, 다양한 방법론 등을 학습했습니다. 저는 배운 것을 토대로 규모가 큰 프로젝트의 핵심 개발자가 되는 것이 목표입니다.<br>
        <br>
        이 목표를 위해 상황에 맞다면 배운 것을 업무에 적극 반영하고 있습니다. 예를들면 첫째, 신규로 진행했던 프로젝트의 CI/CD를 구축한 것입니다. gitlab + jenkins 기반으로 구축했으며 kube 지원 모듈도 추가 개발하여 도커 이미지 형태로 registry에 배포해 관리중입니다. 둘째, vuex의 설계를 응용해 server측 state 관리 FW를 설계 및 구현해 로직을 더 공통화했습니다. 셋째, 지금은 기존 프로젝트의 개선을 위해 리팩토링을 계획 후 시행중이며, 이슈 발생의 최소화와 트래킹을 더 쉽게 할 수단을 고안했습니다. 라이브 서버 이슈를 최소화하기위해 API-First Design 방법론을 도입하기로 추진했으며, 이슈 트래킹을 원할히 하고자 one spring app을 multi module로 분할하하고 있습니다.<br>
        <br>
        이렇게 여러 방면으로 공부하며 일하다보니, 저는 자연스레 맡은 프로젝트 외에도 의존성 있는 프로젝트들 또한 간접적으로나마 관리하게 됐습니다. 이러한 과정을 통해 기술뿐만아니라 잘 짜인 개발 파이프라인에 매력을 느끼게 됐습니다. 따라서, 사람 수에 상관없이 팀 개발을 순조롭게 해줄 개발자를 목표로 다방면으로 지속 성장 중입니다.
      </content-section>
      <content-section
        v-if="works"
        title="업무"
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
        from       : '2011',
        to         : '현재',
        title      : 'T.G.WinG 학술동아리 스터디 참여 및 방중 프로젝트 코멘터 활동',
        description: 'T.G.WinG 홈페이지',
        desc_href  : 'http://tgwing.kr/',
      },
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
        title: 'TypeScript',
        icon : 'mdi-language-typescript',
        value: 60,
      },
      {
        title: 'Vue.js Framework',
        icon : 'mdi-vuejs',
        value: 40,
      },
      {
        title: 'Dart',
        icon : 'logos-dart',
        value: 25,
      },
      {
        title: 'Flutter Framework',
        icon : 'logos-flutter',
        value: 35,
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
        title: 'API-First Desgin',
        icon : 'mdi-test-tube',
        value: 60,
      },
      {
        title: 'Continuous Integration / Continuous Delivery',
        icon : 'mdi-truck-fast',
        value: 70,
      },
      {
        title: 'Git',
        icon : 'mdi-git',
        value: 75,
      },
      {
        title: 'Svn',
        icon : 'mdi-svn',
        value: 40,
      },
      {
        title: 'Jenkins',
        icon : 'vscode-icons-file-type-jenkins',
        value: 60,
      },
      { divider: true },
      {
        title: 'Web Application Server Development',
        icon : 'mdi-chip',
        value: 65,
      },
      {
        title: 'Spring Framework 5.x + etc...',
        icon : 'mdi-spring',
        value: 70,
      },
      {
        title: 'Java 8',
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
        value: 70,
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
