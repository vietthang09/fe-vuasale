import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/avatar"

export function UserAvatar({src = null, fallback = ''}) {
    return (
        <Avatar>
            {src && <AvatarImage src={src} alt="avt"/>}
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    )
}
