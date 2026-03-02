'use strict';

/**
 * game-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game-page.game-page');
