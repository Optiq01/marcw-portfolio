import { Injectable, OnInit } from '@angular/core';
import { SkillData } from '../../../types/types';

const SKILLS: SkillData[] = [
  {
    id: 'html',
    name: 'HTML',
    type: 'language',
    logo: 'html_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      },
      {
        color: 'gray-200',
        order: 2
      }
    ],
    experience: {
      startYear: 1998
    },
    usage: 100,
    description: `Highly skilled at creating semantic markup for web and email that's both pixel perfect and responsive across all devices and browsers.  Stays up to date with latest spec releases and browser compatibility to take advantage of new features as they become universally supported.`
  },
  {
    id: 'css',
    name: 'CSS',
    type: 'language',
    logo: 'css_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      },
      {
        color: 'gray-200',
        order: 2
      }
    ],
    experience: {
      startYear: 1998
    },
    usage: 100,
    description: `Expert at styling web pages and emails with latest supported features to achieve fluid layouts and aesthetically pleasing UIs.  Stays current with latest feature releases and loves to create new techniques for achieving things that normally requires JavaScript.`
  },
  {
    id: 'srcry',
    name: 'SRCRY',
    type: 'framework',
    logo: 'srcry_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2018
    },
    usage: 100,
    description: `Proud creator of this tool and expert at creating fully responsive layouts that are pixel perfect and scale proportionately to the user's device.`
  },
  {
    id: 'svg',
    name: 'SVG',
    type: 'language',
    logo: 'svg_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2002
    },
    usage: 100,
    description: `Highly talented artist and exceptionally skilled at making vector graphics reusable and interactive in the browser.  Custom tailors design systems that suit branding guidelines and makes UIs interesting and creative.`
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    type: 'language',
    logo: 'ts_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2016
    },
    usage: 100,
    description: `Fluent at creating type safe applications with both object oriented and functional design patterns.  Proficiently implements abstraction features to increase reusability and scalability of code base.`
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    type: 'language',
    logo: 'js_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2013
    },
    usage: 100,
    description: `Capable of building both client and server side applications using a broad range of tools available in the ecosystem.  Stays up to date with latest ES features to make code more succinct and readable.`
  },
  {
    id: 'nrwlnx',
    name: 'NRWL NX',
    type: 'framework',
    logo: 'nx_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      },
      {
        color: 'gray-200',
        order: 1
      }
    ],
    experience: {
      startYear: 2017
    },
    usage: 62,
    description: `Seamlessly integrates micro front end and micro service architectures into robust applications.  Builds reusable libraries to share across multiple front ends to minimize code and maintain consistency.`
  },
  {
    id: 'angular',
    name: 'Angular',
    type: 'framework',
    logo: 'angular_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2016
    },
    usage: 100,
    description: `Capable of building complex architectures with a strong understanding of built in modules and ways to implement some of their more advanced features. Up to date with new SSR capabilities and templating syntax for creating concise markup with faster load time.`
  },
  {
    id: 'react',
    name: 'React',
    type: 'framework',
    logo: 'react_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2017
    },
    usage: 58,
    description: `Skilled at creating both function and class based components as well as leveraging hooks to ensure the view stays consistent with the state. Proficiently configures popular third party tools and can build with both TypeScript and JavaScript as needed.`
  },
  {
    id: 'vuejs',
    name: 'Vue JS',
    type: 'framework',
    logo: 'vue_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2017
    },
    usage: 48,
    description: `Capable of blahblahblah`
  },
  {
    id: 'redux',
    name: 'Redux',
    type: 'data',
    logo: 'redux_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2018
    },
    usage: 52,
    description: `Capable of blahblahblah`
  },
  {
    id: 'nestjs',
    name: 'Nest JS',
    type: 'framework',
    logo: 'nest_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2017
    },
    usage: 63,
    description: `Capable of blahblahblah`
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    type: 'data',
    logo: 'graphql_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2020
    },
    usage: 72,
    description: `Capable of blahblahblah`
  },
  {
    id: 'ngxs',
    name: 'NGXS',
    type: 'data',
    logo: 'ngxs_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2018
    },
    usage: 88,
    description: `Capable of blahblahblah`
  },
  {
    id: 'ngrx',
    name: 'NGRX',
    type: 'data',
    logo: 'ngrx_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2018
    },
    usage: 48,
    description: `Capable of blahblahblah`
  },
  {
    id: 'nodejs',
    name: 'Node JS',
    type: 'framework',
    logo: 'node_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2015
    },
    usage: 100,
    description: `Capable of blahblahblah`
  },
  {
    id: 'php',
    name: 'PHP',
    type: 'language',
    logo: 'php_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2013
    },
    usage: 30,
    description: `Capable of blahblahblah`
  },
  {
    id: 'cypress',
    name: 'Cypress',
    type: 'testing',
    logo: 'cypress_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      },
      {
        color: 'gray-200',
        order: 2
      }
    ],
    experience: {
      startYear: 2019
    },
    usage: 88,
    description: `Capable of blahblahblah`
  },
  {
    id: 'jasmine',
    name: 'Jasmine',
    type: 'testing',
    logo: 'jasmine_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2019
    },
    usage: 78,
    description: `Capable of blahblahblah`
  },
  {
    id: 'selenium',
    name: 'Selenium',
    type: 'testing',
    logo: 'selenium_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2021
    },
    usage: 38,
    description: `Capable of blahblahblah`
  },
  {
    id: 'storybook',
    name: 'Storybook',
    type: 'framework',
    logo: 'storybook_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2018
    },
    usage: 84,
    description: `Capable of blahblahblah`
  },
  {
    id: 'sass',
    name: 'Sass',
    type: 'language',
    logo: 'sass_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2007
    },
    usage: 58,
    description: `Capable of blahblahblah`
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    type: 'framework',
    logo: 'bootstrap_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2011
    },
    usage: 35,
    description: `Capable of blahblahblah`
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    type: 'framework',
    logo: 'tailwind_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2021
    },
    usage: 29,
    description: `Capable of blahblahblah`
  },
  {
    id: 'wordpress',
    name: 'Wordpress',
    type: 'framework',
    logo: 'wordpress_logo',
    colors: [
      {
        color: 'gray-300',
        order: 1
      }
    ],
    experience: {
      startYear: 2013
    },
    usage: 36,
    description: `Capable of blahblahblah`
  },
]

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private Skills: SkillData[] = SKILLS;

  constructor() { }

  public getSkills(): SkillData[]{ return this.Skills; }
}
