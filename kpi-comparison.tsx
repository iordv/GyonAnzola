import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const LocationComparison = () => {
  const costMetrics = [
    {
      name: 'Hoogeveen',
      'Food Cost': 33.1,
      'Personeelskosten': 27.9,
      'Vervoerskosten': 6.9
    },
    {
      name: 'Nieuwe Ebbinge',
      'Food Cost': 31.7,
      'Personeelskosten': 31.6,
      'Vervoerskosten': 4.8
    },
    {
      name: 'Zonnelaan',
      'Food Cost': 33.3,
      'Personeelskosten': 24.7,
      'Vervoerskosten': 5.6
    },
    {
      name: 'Heerenveen',
      'Food Cost': 33.0,
      'Personeelskosten': 28.9,
      'Vervoerskosten': 4.5
    }
  ];

  const locationData = [
    {
      name: 'Hoogeveen',
      nettoResult: 2.2
    },
    {
      name: 'Nieuwe Ebbinge',
      nettoResult: 5.6
    },
    {
      name: 'Zonnelaan',
      nettoResult: 3.7
    },
    {
      name: 'Heerenveen',
      nettoResult: 5.6
    }
  ];

  const recentResults = [
    {
      month: 'Augustus',
      'Hoogeveen': 15.3,
      'Nieuwe Ebbinge': 1.6,
      'Zonnelaan': -6.4,
      'Heerenveen': 3.8
    },
    {
      month: 'September',
      'Hoogeveen': 8.0,
      'Nieuwe Ebbinge': 2.7,
      'Zonnelaan': -2.0,
      'Heerenveen': 14.4
    },
    {
      month: 'Oktober',
      'Hoogeveen': 4.0,
      'Nieuwe Ebbinge': 5.0,
      'Zonnelaan': 2.8,
      'Heerenveen': 7.6
    }
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Belangrijkste Kostenposten per Vestiging (% van omzet)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Food Cost" fill="#8884d8" />
                <Bar dataKey="Personeelskosten" fill="#82ca9d" />
                <Bar dataKey="Vervoerskosten" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gemiddeld Netto Resultaat per Vestiging (%)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={locationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="nettoResult" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Netto Resultaat Laatste 3 Maanden (%)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={recentResults}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[-8, 16]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Hoogeveen" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="Nieuwe Ebbinge" stroke="#82ca9d" strokeWidth={2} />
                <Line type="monotone" dataKey="Zonnelaan" stroke="#ffc658" strokeWidth={2} />
                <Line type="monotone" dataKey="Heerenveen" stroke="#ff7300" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationComparison;