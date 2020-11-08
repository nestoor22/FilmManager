from .strategies.context import CollectionsContext

EXISTING_COLLECTIONS_TYPE = ['board', 'list']


def get_user_followed_collections(user_id):
    result = []

    for collection in EXISTING_COLLECTIONS_TYPE:
        collection_context = CollectionsContext(
            collection_type=collection, user_id=user_id)

        result.extend(collection_context.get_followed_collections())

    return sorted(
        result, key=lambda x: getattr(x, 'created_at'), reverse=True)


def get_user_collections(user_id):
    result = []

    for collection in EXISTING_COLLECTIONS_TYPE:
        collection_context = CollectionsContext(
            collection_type=collection,
            user_id=user_id
        )
        result.extend(collection_context.get_user_collections())

    return sorted(
        result, key=lambda x: getattr(x, 'created_at'), reverse=True)


def get_filtered_collections(user_id, user_followed_collections, filters):
    result = []

    for collection in EXISTING_COLLECTIONS_TYPE:
        collection_context = CollectionsContext(
            collection_type=collection, user_id=user_id)

        result.extend(collection_context.get_filtered_collections(
            user_followed_collections=user_followed_collections,
            filters=filters
        ))

    return sorted(
        result, key=lambda x: getattr(x, 'created_at'), reverse=True)

def get_all_collections():
    result = []

    for collection in EXISTING_COLLECTIONS_TYPE:
        collection_context = CollectionsContext(
            collection_type=collection,
        )
        result.extend(collection_context.get_all_collections())

    return sorted(
        result, key=lambda x: getattr(x, 'created_at'), reverse=True)