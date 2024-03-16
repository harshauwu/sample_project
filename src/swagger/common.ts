/**
 * @swagger
 * components:
 *   parameters:
 *     headerCompanyId:
 *       in: header
 *       name: company_id
 *       description: Company Id (only for local swagger mock APIs)
 *       required: false
 *       schema:
 *         type: integer
 *         format: int32
 *         default: 1
 *     headerMasterUserGroupId:
 *       in: header
 *       name: master_user_group_id
 *       description: Master user group Id (only for local swagger mock APIs)
 *       required: false
 *       schema:
 *         type: integer
 *         format: int32
 *         default: 1
 *     headerEntityTypeId:
 *       in: header
 *       name: entity_type
 *       description: Entity type (only for local swagger mock APIs)
 *       required: false
 *       schema:
 *         type: integer
 *         format: int32
 *         default: 1
 *     queryStateId:
 *       in: query
 *       name: state_id
 *       description: State Id
 *       required: false
 *       schema:
 *         type: integer
 *         format: int32
 *         minimum: 0
 *     queryCityId:
 *       in: query
 *       name: city_id
 *       description: City Id
 *       required: false
 *       schema:
 *         type: integer
 *         format: int32
 *         minimum: 0
 *     queryCategoryId:
 *       in: query
 *       name: category_id
 *       description: Category Id
 *       required: false
 *       schema:
 *         type: integer
 *         format: int32
 *         minimum: 0
 *     queryPaginate:
 *       in: query
 *       name: paginate
 *       description: Paginate the results
 *       required: false
 *       schema:
 *         type: boolean
 *     queryPage:
 *       in: query
 *       name: page
 *       description: Page Number
 *       required: false
 *       schema:
 *         type: integer
 *         format: int32
 *         minimum: 1
 *         default: 1
 *     queryPerPage:
 *       in: query
 *       name: per_page
 *       description: Number of entries per page
 *       required: false
 *       schema:
 *         type: integer
 *         format: int32
 *         minimum: 1
 *     querySortOrder:
 *       in: query
 *       name: sort_order
 *       description: Sort order
 *       required: false
 *       schema:
 *         type: string
 *         enum: [asc,desc]
 *   responses:
 *     Unauthorized:
 *       description: 401 Unauthorized
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 default: Unauthorized
 *                 example: Unauthorized
 *     UnprocessableEntity:
 *       description: 422 Unprocessable Entity
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     InternalServerError:
 *       description: 500 Internal Server Error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     ForbiddenError:
 *       description: 403 Forbidden Error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 default: Forbidden
 *                 example: Forbidden
 *     NotFoundError:
 *       description: 404 Not Found Error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 default: Not Found
 *                 example: Not Found
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      paginateMeta:
 *        type: object
 *        properties:
 *          current_page:
 *            type: integer
 *            format: int32
 *            example: 1
 *          last_page:
 *            type: integer
 *            format: int32
 *            example: 8
 *          per_page:
 *            type: integer
 *            format: int32
 *            example: 10
 *          total:
 *            type: integer
 *            format: int32
 *            example: 50
 *          from:
 *            type: integer
 *            format: int32
 *            example: 1
 *          to:
 *            type: integer
 *            format: int32
 *            example: 10
 */
