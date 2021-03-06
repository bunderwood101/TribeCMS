import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import blogPostType from '../../types/blog-post';
import getProjection from '../../get-projection';
import modelPost from '../../../models/post';

export default {
  type: blogPostType,
  args: {
    id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    return modelPost
      .findById(params.id)
      .select(projection)
      .exec();
  }
};
