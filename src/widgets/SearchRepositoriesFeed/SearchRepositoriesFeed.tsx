import { list } from '@effector/reflect';
import { Grid, Progress, Spacer } from '@nextui-org/react';
import { useUnit } from 'effector-react';
import { memo } from 'react';

import { PrimaryLanguage } from '@/entities/Language';
import { LicenseName } from '@/entities/License';
import { RepositoryPreviewCard } from '@/entities/Repository';
import { StargazersCount } from '@/entities/Stargazer';
import { UpdatedAtText } from '@/entities/Time';
import { TopicBadge } from '@/entities/Topic';
import {
  SearchRepositoriesEmpty,
  SearchRepositoriesForm,
  searchRepositoriesModel,
  SearchRepositoriesPagination,
} from '@/features/searchRepositories';
import { RepositoryPreviewFragment } from '@/shared/api/github';
import { Column, Row } from '@/shared/components';

const SearchRepositoryListItem = (repo: RepositoryPreviewFragment) => {
  return (
    <RepositoryPreviewCard key={repo.id}>
      <RepositoryPreviewCard.Header
        nameWithOwner={repo.nameWithOwner}
        url={repo.url}
      />
      {repo.description && (
        <RepositoryPreviewCard.Body description={repo.description} />
      )}
      <RepositoryPreviewCard.Footer>
        <Column>
          {!!repo.repositoryTopics.topics?.length && (
            <Row css={{ gap: '$2' }}>
              {repo.repositoryTopics.topics?.map((item) => (
                <TopicBadge
                  key={item?.topic.id}
                  name={item?.topic.name ?? ''}
                  url={item?.url}
                />
              ))}
            </Row>
          )}
          <Row css={{ flexWrap: 'nowrap' }}>
            <StargazersCount stargazerCount={repo.stargazerCount} />
            {repo.primaryLanguage && (
              <PrimaryLanguage {...repo.primaryLanguage} />
            )}
            {repo.licenseInfo?.name && (
              <LicenseName name={repo.licenseInfo?.name} />
            )}
            <UpdatedAtText date={new Date(repo.pushedAt)} />
          </Row>
        </Column>
      </RepositoryPreviewCard.Footer>
    </RepositoryPreviewCard>
  );
};

const SearchRepositoryList = list({
  source: searchRepositoriesModel.$repositories,
  view: SearchRepositoryListItem,
  getKey: ({ id }) => id,
});

const SearchRepositoryFeedView = () => {
  const [isLoading, isEmpty] = useUnit([
    searchRepositoriesModel.$repositoriesIsLoading,
    searchRepositoriesModel.$repositoriesIsEmpty,
  ]);

  return (
    <Column
      css={{
        flexGrow: 1,
        position: 'relative',
      }}
    >
      {isLoading && (
        <Progress
          indeterminated
          css={{ position: 'absolute', top: '70px' }}
          size='xs'
        />
      )}

      <SearchRepositoriesForm />

      <Spacer />

      {isEmpty && <SearchRepositoriesEmpty />}
      {!isEmpty && (
        <Column
          css={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <Grid
            as='ul'
            css={{
              display: 'grid',

              '@mdMax': {
                gap: '$4',
              },
              '@mdMin': {
                gap: '$8',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr));',
              },
            }}
          >
            <SearchRepositoryList />
          </Grid>
          <SearchRepositoriesPagination />
        </Column>
      )}
    </Column>
  );
};

export const SearchRepositoryFeed = memo(SearchRepositoryFeedView);
