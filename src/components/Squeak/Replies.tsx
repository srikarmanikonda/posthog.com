import React from 'react'
import { StrapiData } from './utils'

import { Days } from './Days'

export type ReplyData = {
    // TODO: Populate profile data
    body: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}

type RepliesProps = {
    replies?: StrapiData<ReplyData[]>
}

export const Replies: React.FC<RepliesProps> = ({ replies }) => {
    if (!replies) {
        // TODO: Show loading state
        return null
    }

    return (
        <div className="space-y-4">
            {replies.data.map((reply) => (
                <div key={reply.id} className="bg-gray-100 p-4 rounded">
                    <Days createdAt={reply.attributes.createdAt} />
                    <div className="text-gray-700">{reply.attributes.body}</div>
                </div>
            ))}
        </div>
    )
}