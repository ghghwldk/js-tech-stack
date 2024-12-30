// timehelper.ts

// Utility function to add minutes to the current time
export function addMinutesToCurrentTime(minutes: number): Date {
    return new Date(new Date().getTime() + minutes * 60 * 1000);
}

// Utility function to format date as YYYY-MM-DD HH:MM:SS
export function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Utility function to calculate the difference in minutes between two Date objects
export function getDifferenceInMinutes(startDate: Date, endDate: Date): number {
    const diffInMs = endDate.getTime() - startDate.getTime();
    return diffInMs / (1000 * 60); // Convert milliseconds to minutes
}

// Utility function to get the current time in milliseconds
export function getCurrentTimeInMs(): number {
    return new Date().getTime();
}

// Utility function to get a human-readable time difference (e.g., "2 hours ago")
export function timeAgo(date: Date): string {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInMinutes = diffInMs / (1000 * 60);

    if (diffInMinutes < 60) {
        return `${Math.floor(diffInMinutes)} minute(s) ago`;
    } else if (diffInMinutes < 1440) {
        const hours = Math.floor(diffInMinutes / 60);
        return `${hours} hour(s) ago`;
    } else if (diffInMinutes < 43200) {
        const days = Math.floor(diffInMinutes / 1440);
        return `${days} day(s) ago`;
    } else {
        const months = Math.floor(diffInMinutes / 43200);
        return `${months} month(s) ago`;
    }
}
