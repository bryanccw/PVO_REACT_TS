import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RaceModel } from '../../../sdk/type';
import { Table, TableVersion, Page, Theme, SortOrders } from '../../../ui/components';
import raceService from '../../../sdk/services/raceService';

export const RaceSetup = () => {
  const { t } = useTranslation();
  const [race, setRace] = useState<RaceModel[]>();

  useEffect(() => {
    raceService.getRace().then(res => {
      setRace(res.data);
    });
  }, []);

  const cols = [
    {
      key: 'raceCode',
      text: t('admin.race.code'),
      sortable: true,
      render: (object: any) => <div>{object.raceCode}</div>,
    },
    {
      key: 'race',
      text: t('admin.race.name'),
      sortable: true,
      render: (object: any) => <div>{object.race}</div>,
    },
  ];

  const sortCallback = (column: string, order: SortOrders, pageNumber: number): RaceModel[] => {
    return (race ?? []).sort((a: RaceModel, b: RaceModel) => {
      if (order === SortOrders.ASC) {
        if (typeof a[column] === 'string') {
          return a[column].localeCompare(b[column]);
        } else {
          return a[column] - b[column];
        }
      } else {
        if (typeof a[column] === 'string') {
          return b[column].localeCompare(a[column]);
        } else {
          return b[column] - a[column];
        }
      }
    });
  };
  return (
    <Page caption={t('admin.race.title')}>
      <Table
        tableVersion={TableVersion.ADMIN}
        dataSource={race ?? []}
        columns={cols}
        rowKey="_id"
        pagination={true}
        headerTheme={Theme.BLACK}
        onRowClick={(value, index) => console.log(value, index)}
        sortingCallback={sortCallback}
      ></Table>
    </Page>
  );
};
