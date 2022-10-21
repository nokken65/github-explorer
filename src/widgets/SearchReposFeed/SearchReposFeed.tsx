import { list } from '@effector/reflect';
import { Grid, Progress, Spacer } from '@nextui-org/react';
import { useUnit } from 'effector-react';
import { memo } from 'react';

import { languageModel, PrimaryLanguage } from '@/entities/Language';
import { LicenseName } from '@/entities/License';
import { RepoCard } from '@/entities/Repo';
import { StargazersCount } from '@/entities/Stargazer';
import { UpdatedAtText } from '@/entities/Time';
import { TopicBadge } from '@/entities/Topic';
import {
  SearchReposEmpty,
  SearchReposForm,
  searchReposModel,
  SearchReposPagination,
  TSearchReposResultData,
} from '@/features/searchRepos';
import { Column, Row } from '@/shared/components';

const SearchReposListItem = (repo: TSearchReposResultData['items'][number]) => {
  const colors = useUnit(languageModel.$languagesColors);

  return (
    <RepoCard key={repo.id}>
      <RepoCard.Header name={repo.name} ownerName={repo.owner?.login ?? ''} />
      {repo.description && <RepoCard.Body description={repo.description} />}
      <RepoCard.Footer>
        <Column>
          {!!repo.topics?.length && (
            <Row css={{ gap: '$2' }}>
              {repo.topics.map((topic) => (
                <TopicBadge key={topic} name={topic} />
              ))}
            </Row>
          )}
          <Row css={{ flexWrap: 'nowrap' }}>
            <StargazersCount count={repo.stargazers_count} />
            {repo.language && (
              <PrimaryLanguage
                color={colors[repo.language] ?? null}
                name={repo.language}
              />
            )}
            {repo.license && <LicenseName name={repo.license.name} />}
            <UpdatedAtText date={new Date(repo.pushed_at)} />
          </Row>
        </Column>
      </RepoCard.Footer>
    </RepoCard>
  );
};

const SearchReposList = list({
  source: searchReposModel.$searchedRepos,
  view: SearchReposListItem,
  getKey: ({ id }) => id,
});

const SearchReposFeedView = () => {
  const [isLoading, isEmpty] = useUnit([
    searchReposModel.$searchedReposIsLoading,
    searchReposModel.$searchedReposIsEmpty,
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

      <SearchReposForm />

      <Spacer />

      {isEmpty && <SearchReposEmpty />}
      {!isEmpty && (
        <Column
          css={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <SearchReposPagination />
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
            <SearchReposList />
          </Grid>
        </Column>
      )}
    </Column>
  );
};

export const SearchReposFeed = memo(SearchReposFeedView);
