// import { decodeShopOpaqueId } from "../../xforms/id.js";

// /**
//  * @name Mutation.updateCategory
//  * @method
//  * @memberof Routes/GraphQL
//  * @summary Add a tag
//  * @param {Object} parentResult - unused
//  * @param {Object} args.input - AddTagInput
//  * @param {String} args.input.name - path to redirect from
//  * @param {String} args.input.displayName - path to redirect to
//  * @param {Boolean} args.input.isVisible - whether the tag is visible
//  * @param {String} [args.input.clientMutationId] - An optional string identifying the mutation call
//  * @param {Object} context - an object containing the per-request state
//  * @returns {Promise<Object>} AddTagPayload
//  */

export default async function updateCategory(parentResult, args, context) {
  let newupdateCategory = await context.mutations.updateCategory(context, args);

  return newupdateCategory;
}
