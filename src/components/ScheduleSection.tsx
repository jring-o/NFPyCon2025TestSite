
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ScheduleSection = () => {
  const days = [
    { value: "day1", label: "Day 1 - May 15" },
    { value: "day2", label: "Day 2 - May 16" },
    { value: "day3", label: "Day 3 - May 17" },
  ];

  const events = {
    day1: [
      { time: "9:00 AM", title: "NumFOCUS Booth Opens", location: "Exhibit Hall A" },
      { time: "10:30 AM", title: "Contributing to NumPy Workshop", location: "Room 103" },
      { time: "1:00 PM", title: "Pandas Data Analysis", location: "Room 215" },
      { time: "3:30 PM", title: "Open Source Funding Panel", location: "Main Auditorium" },
    ],
    day2: [
      { time: "9:30 AM", title: "Scientific Visualization with Matplotlib", location: "Room 107" },
      { time: "11:00 AM", title: "NumFOCUS Projects Showcase", location: "Exhibit Hall A" },
      { time: "2:00 PM", title: "Jupyter for Education", location: "Room 202" },
      { time: "4:30 PM", title: "Diversity in Open Source", location: "Room 301" },
    ],
    day3: [
      { time: "9:00 AM", title: "SciPy Ecosystem Overview", location: "Room 118" },
      { time: "11:30 AM", title: "Scikit-learn Tutorial", location: "Room 224" },
      { time: "2:30 PM", title: "NumFOCUS Community Meetup", location: "Networking Lounge" },
      { time: "4:00 PM", title: "Closing Reception", location: "Main Hall" },
    ],
  };

  return (
    <div className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Event <span className="text-numfocus-coral">Schedule</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Join NumFOCUS and our sponsored projects for these featured events at PyCon 2025.
          </p>
        </div>

        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            {days.map((day) => (
              <TabsTrigger key={day.value} value={day.value} className="text-md">
                {day.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {days.map((day) => (
            <TabsContent key={day.value} value={day.value} className="animate-fade-in">
              <div className="grid gap-6">
                {events[day.value].map((event, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/6 bg-numfocus-teal/10 p-6 flex items-center justify-center">
                          <span className="text-xl font-semibold text-numfocus-teal">{event.time}</span>
                        </div>
                        <div className="w-full md:w-5/6 p-6">
                          <h3 className="text-xl font-bold">{event.title}</h3>
                          <p className="text-gray-600 mt-1">{event.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ScheduleSection;
