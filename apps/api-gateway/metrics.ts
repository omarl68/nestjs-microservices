import { Gauge, Registry } from 'prom-client';
import * as gaussian from 'gaussian';

function activeUsersPerCategoryMetric(registry: Registry) {
  const gauge = new Gauge({
    name: 'active_users',
    help: 'Amount of active users right now per category',
    registers: [registry],
    labelNames: ['category'],
  });

  const categoriesWithDistribution: [string, number, number][] = [
    ['oil', 100, 30],
    ['wine', 200, 30],
    ['bread', 300, 30],
    ['butter', 400, 30],
  ];

  async function collectActiveUsers() {
    categoriesWithDistribution.forEach(([category, mean, variance]) => {
      gauge.set(
        { category },
        Math.floor(gaussian(mean, variance).ppf(Math.random())),
      );
    });
  }

  setInterval(collectActiveUsers, 5000);
}

export default (registry: Registry) => {
  activeUsersPerCategoryMetric(registry);
};
