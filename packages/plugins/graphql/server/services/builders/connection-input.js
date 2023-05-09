'use strict';

const { objectType, nonNull } = require('nexus');
const { defaultTo, prop, pipe } = require('lodash/fp');

module.exports = ({ strapi }) => {

  return {
    /**
     * Build a type definition for a content API to many relation's connection input
     * @return {NexusObjectTypeDef}
     */
    buildRelationConnectionInputDefinition(contentType) {
    },
  };
};
