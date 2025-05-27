import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TimeCard = () => {
  const now = new Date();

  const formattedTime = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const offsetMinutes = now.getTimezoneOffset();
  const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
  const offsetMins = Math.abs(offsetMinutes) % 60;
  const offsetSign = offsetMinutes <= 0 ? '+' : '-';
  const formattedOffset = `GMT${offsetSign}${offsetHours}:${offsetMins
    .toString()
    .padStart(2, '0')}`;

  return (
    <Card className="py-1 items-start">
      <CardContent className="px-2">
        <div className="flex flex-start text-sm gap-2 px-0 text-muted-foreground">
          <Badge
            variant="default"
            className="rounded-full px-1.5 py-0.5 text-[10px]"
          >
            ●
          </Badge>
          <span>{formattedTime}</span>
          <span>|</span>
          <span>
            {timeZoneName} ({formattedOffset})
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeCard;
