export type LanguageSkill = 'language';
export type FrameworkSkill = 'framework';
export type DataSkill = 'data';
export type TestingSkill = 'testing';

export type SkillType = LanguageSkill | FrameworkSkill | DataSkill | TestingSkill;

export interface LogoColor{
    color: string;
    order: number;
}

export interface SkillExperience{
    startYear?: number;
    startMonth?: number;
}

export interface SkillData{
    id: string;
    name: string;
    type: SkillType;
    logo: string;
    colors: LogoColor[];
    experience: SkillExperience;
    usage: number;
    description: string;
}