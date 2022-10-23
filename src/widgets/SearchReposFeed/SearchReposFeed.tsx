import { list, reflect } from '@effector/reflect';
import { Grid, Progress } from '@nextui-org/react';
import { useUnit } from 'effector-react';

import { IssuesCount } from '@/entities/Issues';
import { langModel, LangText } from '@/entities/Lang';
import { LicenseName } from '@/entities/License';
import { RepoCard } from '@/entities/Repo';
import { StargazersCount } from '@/entities/Stargazer';
import { UpdatedAtText } from '@/entities/Time';
import { TopicBadge } from '@/entities/Topic';
import {
  SearchReposEmpty,
  SearchReposFilters,
  SearchReposForm,
  searchReposModel,
  SearchReposPagination,
  TSearchReposResultData,
} from '@/features/searchRepos';
import { Column, Row } from '@/shared/components';

const SearchReposListItem = (repo: TSearchReposResultData['items'][number]) => {
  const langs = useUnit(langModel.$langs);

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
              <LangText
                color={langs[repo.language]?.color ?? null}
                name={repo.language}
              />
            )}
            {repo.license && <LicenseName name={repo.license.name} />}
            <Row
              css={{
                width: 'fit-content',
                display: 'inline-flex',
                ml: 'auto',
                flexWrap: 'nowrap',
              }}
            >
              {repo.open_issues > 0 && (
                <IssuesCount
                  count={repo.open_issues}
                  hasIssues={repo.has_issues}
                />
              )}
              <UpdatedAtText date={new Date(repo.updated_at)} />
            </Row>
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

const SearchReposListWithContainer = ({
  isLoading,
}: {
  isLoading: boolean;
}) => {
  return (
    <Column
      css={{
        flexGrow: 1,
        justifyContent: 'space-between',
        gap: '$xl',
        position: 'relative',
      }}
    >
      {isLoading && (
        <Progress
          indeterminated
          css={{ position: 'absolute', top: '-10px' }}
          size='xs'
        />
      )}

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
      <SearchReposPagination />
    </Column>
  );
};

type TSearchReposFeedViewProps = {
  isLoading: boolean;
  isEmpty: boolean;
};

const SearchReposFeedView = ({
  isLoading,
  isEmpty,
}: TSearchReposFeedViewProps) => {
  return (
    <Column
      css={{
        flexGrow: 1,
      }}
    >
      <SearchReposForm />

      <SearchReposFilters />

      {isEmpty ? (
        <SearchReposEmpty />
      ) : (
        <SearchReposListWithContainer isLoading={isLoading} />
      )}
    </Column>
  );
};

export const SearchReposFeed = reflect({
  view: SearchReposFeedView,
  bind: {
    isLoading: searchReposModel.$searchedReposIsLoading,
    isEmpty: searchReposModel.$searchedReposIsEmpty,
  },
  hooks: {
    mounted: () => langModel.loadLangsFx(),
  },
});
