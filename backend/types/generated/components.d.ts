import type { Schema, Struct } from '@strapi/strapi';

export interface GameGame extends Struct.ComponentSchema {
  collectionName: 'components_game_games';
  info: {
    displayName: 'Game';
  };
  attributes: {
    games: Schema.Attribute.Relation<'oneToMany', 'api::game.game'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'game.game': GameGame;
      'shared.seo': SharedSeo;
    }
  }
}
