export function getEntities(router, heroMock, whatIsMock, useCaseMock,projectMock, defaultId) {
  const defaultHeroId = defaultId;
  const defaultWhatIsId = defaultId;
  const defaultUseCaseId = defaultId;
  const defaultProjectId = defaultId;
  const { heroId, whatisId, usecaseId, projectId } = router.query;

  const hero = heroMock.find(her => her.heroId === heroId) ?? heroMock.find(her => her.heroId === defaultHeroId);
  const whatis = whatIsMock.find(wha => wha.whatIsId === whatisId) ?? whatIsMock.find(wha => wha.whatIsId === defaultWhatIsId);
  const usecase = useCaseMock.find(use => use.useCaseId === usecaseId) ?? useCaseMock.find(use => use.useCaseId === defaultUseCaseId);
  const project = projectMock.find(pro => pro.projectId === projectId) ?? projectMock.find(pro => pro.projectId === defaultProjectId);

  return { hero, whatis, usecase, project };
}
