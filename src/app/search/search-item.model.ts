export interface ISearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: ISnippets,
  statistics: IStatistics
}

interface ISnippets {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IThumbnails,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  defaultLanguage: string,
  localized: {
    title: string,
    description: string
  },
  defaultAudioLanguage: string
}

interface IThumbnails {
  default: IThumbnailsParams,
  medium: IThumbnailsParams,
  high: IThumbnailsParams,
  standard: IThumbnailsParams,
  maxres: IThumbnailsParams
}

interface IThumbnailsParams {
  url: string,
  width: number,
  height: number
}

interface IStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}
