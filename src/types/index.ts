export type Page = {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
}

export type Beans = Page &{
    items: Bean[];
}

export type Bean = {
    backgroundColor: string,
    beanId: number,
    colorGroup: string,
    description: string,
    flavorName: string,
    glutenFree: boolean,
    groupName: string[],
    imageUrl: string,
    ingredients: string[],
    kosher: boolean,
    seasonal: boolean,
    sugarFree: boolean
}

export type Facts = Page &{
    items: Fact[];
}

export type Fact ={
    factId: number,
    title: string,
    description: string
} 

export type Recipe ={
    additions1: string[];
    additions2: string[];
    additions3: string[];
    cookTime: string;
    description: string;
    directions: string[];
    imageUrl: string;
    ingredients: string[];
    makingAmount: string;
    name: string;
    prepTime: string;
    recipeId: number;
    tips: string[];
    totalTime: string;
};

export type RecipesT = Page &{
    items: Recipe[]
}


export type mileStones = {
    description: string;
    mileStoneId: number;
    year: number;           
};

export type History = Page &{
    items: mileStones[];
}

export type Combinations = Page & {
    items: Combination[]
}
export type Combination ={
    combinationId: number,
    name: string,
    tag: string[]   
}