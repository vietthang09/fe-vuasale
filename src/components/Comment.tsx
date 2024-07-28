"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserAvatar } from "@/components/UserAvatar";
import PaginationCard from "@/components/PaginationCard";

const comments = [
  {
    email: "guest@gmail.com",
    content: "Hay quá",
    replies: [
      {
        email: "vuasale@gmail.com",
        content: "Cảm ơn bạn",
      },
      {
        email: "vuasale@gmail.com",
        content: "Cảm ơn bạn",
      },
    ],
  },
  {
    email: "guest@gmail.com",
    content: "Hay quá",
    replies: [],
  },
];
export default function Comment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mới nhất</CardTitle>
      </CardHeader>
      <CardContent>
        {comments.length === 0 && (
          <div className="w-full">
            <p>Hiện chưa có bình luận nào, hãy là người đầu tiên bình luận</p>
          </div>
        )}
        {comments.map((comment, index) => {
          return (
            <div key={index} className="w-full flex my-6">
              <UserAvatar fallback={comment.email.charAt(0).toUpperCase()} />
              <div className="ml-2">
                <h4 className="font-semibold">{comment.email}</h4>
                <p>{comment.content}</p>
                {comment.replies.map((reply, index) => {
                  return (
                    <div key={index} className="w-full flex my-6">
                      <UserAvatar
                        fallback={reply.email.charAt(0).toUpperCase()}
                      />
                      <div key={index} className="ml-2">
                        <h4 className="font-semibold">{reply.email}</h4>
                        <p>{reply.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
