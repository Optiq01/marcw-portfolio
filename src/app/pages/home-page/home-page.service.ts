import { Injectable, OnInit } from '@angular/core';
import { SkillData } from '../../../types/types';

const SKILLS: SkillData[] = [
  {
    id: 'html',
    name: 'HTML',
    type: 'language',
    logo: '#html_logo',
    viewBox: {
      x: 0,
      y: 0,
      width: 292.869598,
      height: 413.386261
    },
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
    logo: '#css_logo',
    viewBox: {
      x: 0,
      y: 0,
      width: 292.778442,
      height: 413.386261
    },
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
    logo: '#srcry_logo',
    viewBox: {
      x: 0,
      y: 0,
      width:254.34375,
      height: 411.536935
    },
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
    logo: '#svg_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 294.315796,
      height: 294.213501
    },
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
    logo: '#ts_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 294.315796,
      height: 294.213501
    },
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
    logo: '#js_logo',
    viewBox:{
      x: 0,
      y: 0,
      width:294.758331,
      height:294.758331
    },
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
    logo: '#nx_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 293.305267,
      height: 182.239227
    },
    colors: [
      {
        color: 'gray-300',
        order: 1
      },
      {
        color: 'gray-400',
        order: 2
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
    logo: '#angular_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 293.684204,
      height: 310.821381
    },
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
    logo: '#react_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 294.533264,
      height: 262.118011
    },
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
    logo: '#vue_logo',
    viewBox: {
      x: 0,
      y: 0,
      width: 291.789459,
      height: 252.699905
    },
    colors: [
      {
        color: 'gray-300',
        order: 1
      },
      {
        color: 'gray-500',
        order: 2
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
    logo: '#redux_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 294.422607,
      height: 279.510559
    },
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
    logo: '#nest_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 296.323486,
      height: 295.295441
    },
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
    logo: '#graphql_logo',
    viewBox: {
      x: 0,
      y: 0,
      width: 296.61438,
      height: 333.278229
    },
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
    logo: '#ngxs_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 298.717865,
      height: 81.872894
    },
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
    logo: '#ngrx_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 296.852661,
      height: 318.396484
    },
    colors: [
      {
        color: 'gray-300',
        order: 1
      },
      {
        color: 'gray-500',
        order: 2
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
    logo: '#node_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 297.1409,
      height: 83.908829
    },
    colors: [
      {
        color: 'gray-300',
        order: 1
      },
      {
        color: 'gray-400',
        order: 2
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
    logo: '#php_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 297.210541,
      height: 149.337753
    },
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
    logo: '#cypress_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 297.863159,
      height: 120.045601
    },
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
    logo: '#jasmine_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 294.773682,
      height: 294.646362
    },
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
    logo: '#selenium_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 757.097351,
      height: 792.895264
    },
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
    logo: '#storybook_logo',
    viewBox:{
      x: 0,
      y: 0,
      width: 297.761597,
      height: 370.980133
    },
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
    logo: '#sass_logo',
    viewBox: {
      x: 0,
      y: 0,
      width: 297.118408,
      height: 222.82106
    },
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
    logo: '#bootstrap_logo',
    viewBox: {
      x: 0,
      y: 0,
      width: 297.347382,
      height: 236.86969
    },
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
    logo: '#tailwind_logo',
    viewBox: {
      x: 0,
      y: 0,
      width: 298.221039,
      height: 177.859055
    },
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
    logo: '#wordpress_logo',
    viewBox: {
      x: 0,
      y: 0,
      width: 298.115784,
      height: 298.115723
    },
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
